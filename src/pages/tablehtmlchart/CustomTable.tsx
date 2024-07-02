import React, { useState, useEffect, useRef } from "react";
import "./customtable.css";
// import axios from 'axios';
import { IData, IItem, IRoot, ISection } from "../../types/Table";
import eyeIcon from "../../assets/view.png";

const CustomTable: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<ISection[]>();
  const [editableRow, setEditableRow] = useState<{
    section: string;
    index: number;
    type: string;
  } | null>(null);
  const [editableunitcostRow, setEditableUnitCostRow] = useState<{
    section: string;
    index: number;
    type: string;
  } | null>(null);
  
  const [editedData, setEditedData] = useState<{ [key: string]: IItem[] }>({});
  const [unitcostData, setUnitCostData] = useState<{ [key: string]: IItem[] }>({});

  const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});
  const [alldata, setAllData] = useState<IData>();

  const handleInputChange = (
    sectionName: string,
    index: number,
    key: string,
    value: string
  ) => {
    
    if(key !== 'unitcost'){
      
      const updatedSectionItems = [...(editedData[sectionName] || [])];
      
      updatedSectionItems[index] = {
        ...updatedSectionItems[index],
        [key]: value,
      };
      setEditedData({ ...editedData, [sectionName]: updatedSectionItems });
    }else{
      const updatedSectionItemscost = [...(unitcostData[sectionName] || [])];
      updatedSectionItemscost[index] = {
        ...updatedSectionItemscost[index],
        [key]: value,
      };
      setUnitCostData({ ...unitcostData, [sectionName]: updatedSectionItemscost })
    }
   
  };

  const handleEdit = (sectionName: string, index: number,key:string) => {
    debugger
    if(key === 'quantity'){
      setEditableRow({ section: sectionName, index , type:key });
    }else{
      setEditableUnitCostRow({ section: sectionName, index , type:key })
    }
  };

  const handleSave = (sectionName: string, index: number) => {
    setEditableRow(null);
    setEditableUnitCostRow(null);
    
    if (Object.prototype.hasOwnProperty.call(editedData, sectionName)) {
      const value = editedData[sectionName][index];

      const section = data?.find((ele) => ele.section_name === sectionName);

      data?.forEach((item) => {
        if (item.section_name === sectionName) {
          if (item?.items.length !== 0) {
            item?.items.forEach((ele, i) => {
              if (i === index) {
                ele.quantity = value.quantity;
                ele.total = (
                  Number(value.quantity) * Number(ele.unit_cost)
                ).toString();
              }
            });
          }
        }
      });

    
      // updateUser(sectionName, section?.section_id, index, data);
    }
    if (Object.prototype.hasOwnProperty.call(unitcostData, sectionName)) {
      const unitvalue = unitcostData[sectionName][index];

      const section = data?.find((ele) => ele.section_name === sectionName);

      data?.forEach((item) => {
        if (item.section_name === sectionName) {
          if (item?.items.length !== 0) {
            item?.items.forEach((ele, i) => {
              if (i === index) {
                ele.unit_cost = unitvalue.unit_cost
                ele.total = (
                  Number(unitvalue.quantity) * Number(ele.unit_cost)
                ).toString();
              }
            });
          }
        }
      });
    }

  };

  const handleBlur = (sectionName: string, index: number) => {
    handleSave(sectionName, index);
  };

  const handleKeyPress = (
    event: React.KeyboardEvent,
    sectionName: string,
    index: number
  ) => {
    if (event.key === "Enter") {
      handleSave(sectionName, index);
      const nextInputKey = `${sectionName}-${index + 1}`;
      if (inputRefs.current[nextInputKey]) {
        inputRefs.current[nextInputKey]!.focus();
      }
    }
  };

  // Simulate Update

  // const updateUser = async (
  //   sectionName: string,
  //   sectionId: string | undefined,
  //   index: number,
  //   data: ISection[] | undefined
  // ) => {
  //   let a = {
  //     ...alldata,
  //     sections: data,
  //   };

  //   try {
  //     const response = await fetch(`http://localhost:3000/data`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //       },
  //       body: JSON.stringify(a),
  //     });
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const updatedItem = await response.json(); // Renamed to `updatedItem`

  //     // Update state or handle the updated item here
  //   } catch (error) {
  //     console.error("Error updating item:", error);
  //   }
  // };

  useEffect(() => {
    fetch("http://localhost:5173/estimate.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data.sections);
        setAllData(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (editableRow) {
      debugger
      const inputKey = `${editableRow.section}-${editableRow.index}`;
      if (inputRefs.current[inputKey]) {
        inputRefs.current[inputKey]!.focus();
      }
    }
  }, [editableRow]);

  const calculateTotals = (sections: ISection) => {
    let amount = 0;

    if (sections.items.length !== 0) {
      sections.items.forEach((e: IItem) => {
        amount += Number(e.total);
      });
    }
    return amount;
  };

  function getBodyTableData(section: ISection) {
    const Totalamount = calculateTotals(section);
    return (
      <>
        <thead>
          <tr style={{ backgroundColor: "#f3f3f3" }}>
            <th colSpan={8}>{`- ${section.section_name}`}</th>
            <th
              colSpan={1}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <span>{`$${Totalamount}`}</span>
              <img src={eyeIcon} style={{ width: "25px", height: "25px" }} />
            </th>
          </tr>
          <tr style={{ border: "1.35px solid gray" }}>
            <th>Type</th>
            <th>Item Name</th>
            <th>QTY</th>
            <th>Cost Unit</th>
            <th>Unit</th>
            <th>Total</th>
            <th>Tax</th>
            <th>Cost Code</th>
            <th></th>
          </tr>
        </thead>
        <tbody style={{ border: "1.35px solid gray" }}>
          {section.items.map((item: IItem, index) => {
            const isEditingqty =
              editableRow &&
              editableRow.section === section.section_name &&
              editableRow.index === index && editableRow.type === 'quantity';
              const isEditingunitcost =
              editableunitcostRow &&
              editableunitcostRow.section === section.section_name &&
              editableunitcostRow.index === index && editableunitcostRow.type === 'unitcost';  
            const currentItemqty =
              editedData[section.section_name]?.[index] || item;
              
              const currentItemunitcost =
              unitcostData[section.section_name]?.[index] || item;  
            const inputKey = `${section.section_name}-${index}`;
            return (
              <>
                <tr>
                  <td>{item.item_type_display_name}</td>
                  <td>{item.subject}</td>
                  <td onClick={() => handleEdit(section.section_name, index ,'quantity')}>
                    {isEditingqty ? (
                      <input
                        type="text"
                        className="input-no-border"
                        ref={(el) => (inputRefs.current[inputKey] = el)}
                        value={currentItemqty.quantity}
                        onChange={(e) =>
                          handleInputChange(
                            section.section_name,
                            index,
                            "quantity",
                            e.target.value
                          )
                        }
                        onBlur={() => handleBlur(section.section_name, index)}
                        onKeyPress={(e) =>
                          handleKeyPress(e, section.section_name, index)
                        }
                      />
                    ) : (
                      item.quantity
                    )}
                  </td>
                  <td onClick={() => handleEdit(section.section_name, index , 'unitcost')}>
                  {isEditingunitcost ? (
                    <input
                      type="text"
                      className="input-no-border"
                      ref={(el) => (inputRefs.current[inputKey] = el)}
                      value={currentItemunitcost.unit_cost}
                      onChange={(e) => handleInputChange(section.section_name, index, "unitcost", e.target.value)}
                      onBlur={() => handleBlur(section.section_name, index)}
                      onKeyPress={(e) => handleKeyPress(e, section.section_name, index)}
                    />
                  ) : (
                    item.unit_cost
                  )}
                </td> 
                  {/* <td>{item.unit_cost}</td> */}
                  <td>{item.unit}</td>
                  <td>{item.total}</td>
                  <td>{item.tax_id}</td>
                  <td>{item.cost_code}</td>
                  <td>
                    <img
                      src={eyeIcon}
                      style={{ width: "25px", height: "25px" }}
                    />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </>
    );
  }

  return (
    <div>
      {data !== undefined &&
        data.map((ele: ISection) => {
          return (
            <>
              {ele.items.length !== 0 && <table>{getBodyTableData(ele)}</table>}
            </>
          );
        })}
    </div>
  );
};

export default CustomTable;
