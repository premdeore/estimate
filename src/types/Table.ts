export interface IRoot {
    __service_time__: string
    __offset_seconds__: number
    global_project: GlobalProject
    assigned_projects_list: string
    is_expire: string
    subscription_flag: string
    app_access_: string
    success: string
    data: IData
    company_name: string
    checklist: Checklist2[]
    message: string
    default_item_view: string
    is_batch_exist: string
    old_sent_document: string
    sent_document_date: string
  }
  
  export interface GlobalProject {
    project_id: string
    project_name: string
    view_in_timecard: string
    project_selection: string
  }
  
  export interface IData {
    estimate_id: string
    customer_id: string
    project_id: string
    title: string
    description: string
    authorized_by: string
    notes: string
    approval_type: string
    estimate_date: string
    estimate_time: string
    expire_date: string
    user_id: string
    company_id: string
    is_deleted: string
    date_added: string
    date_modified: string
    image: string
    company_estimate_id: string
    company_estimate_id_backup: string
    total: string
    authorized_type: string
    signature: string
    parent_estimate_id: string
    demo_data: string
    is_lock: string
    inclusion: string
    exclusion: string
    estimate_terms: string
    estimate_default_terms: string
    estimate_custom_terms: string
    customer_contact_id: string
    custom_estimate_id: string
    is_template: string
    billed_to: string
    qb_date: string
    quickbook_estimate_id: string
    qbc_id: string
    is_updated: string
    tax_id: string
    ref_invoice_id: string
    locked_by: string
    estimate_project_type: string
    estimate_project_type_key: string
    show_files_on_pdf: string
    billed_to_status: string
    date_billed_to_status: string
    ip_address: string
    approval_type_key: string
    approval_type_backup: string
    billing_option: string
    bid_manager_id: string
    project_manager_id: string
    billed_to_contact: string
    enable_procurement_tab: string
    address_from: string
    est_street1: string
    est_street2: string
    est_city: string
    est_state: string
    est_zip: string
    est_approval_date: string
    est_submit_approval_email_status: string
    estimate_status_update_from_cron: string
    is_project_template: string
    project_template_id: string
    origin: string
    estimate_term_message: string
    tax_name: string
    tax_rate: string
    is_group_tax: string
    group_children: string
    approval_type_name: string
    project_name: string
    quickbook_project_id: string
    total_tax_rate: string
    is_reversible_tax: string
    quickbook_classprojecttype_id: string
    estimate_project_type_name: string
    project_type_name: string
    project_type: string
    prj_type: string
    address_one: string
    address_two: string
    cust_location: string
    cust_type: string
    est_created_email: string
    employee: string
    default_section_id: string
    locked_by_username: string
    prj_customer_name: string
    project_customer_email: string
    authorized_by_name: string
    authorized_by_name_only: string
    authorized_by_company_name: string
    customer_name: string
    customer_company: string
    customer_name_only: string
    customer_fisrt_name: string
    customer_last_name: string
    customer_phone: string
    customer_fax: string
    customer_cell: string
    customer_title: string
    user_company_name: string
    bid_manager_name: string
    project_manager_name: string
    project_manager_name_only: string
    project_manager_company_name: string
    project_manager_email: string
    cmp_phone: string
    cmp_image: string
    cust_address: string
    cust_street1: string
    cust_street2: string
    email_subject: string
    cust_phone: string
    cust_city: string
    cust_state: string
    cust_zip: string
    quickbook_customer_id: string
    customer_email: string
    customer_billed_to_id: string
    prj_address1: string
    prj_address2: string
    prj_city: string
    prj_state: string
    prj_zip: string
    prj_id: string
    billed_to_name: string
    billed_to_email: string
    billed_to_id: string
    billed_to_company_name: string
    billed_to_name_w_o_company: string
    estimate_date_use_qb: string
    expire_date_use_qb: string
    billed_to_dir_type: string
    current_estimate_items_total: string
    estimate_taxable_total: string
    estimate_date_for_maill: string
    start_date: string
    end_date: string
    time_added: string
    time_modified: string
    qb_date_added: string
    qb_time_added: string
    time_billed_to_status: string
    origin_date_modified: string
    project_is_deleted: string
    estimate_no_of_items: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    taxes: any[]
    calc_taxable_total: string
    total_markup_amount: string
    total_markup_item_amount: string
    total_w_tax: string
    laborhours: string
    sections: ISection[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    biddings: any[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    aws_files: any[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    materials: any[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    equipments: any[]
    itemsSummary: ItemsSummary[]
    checklist: Checklist[]
    all_item_total: AllItemTotal
    show_coversheet_in_pdf: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    notes_data: any[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    custom_form_data: any[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form_array: any[]
    custom_field_id: string
    custom_field_form_json: string
    custom_field_form_json_decode: CustomFieldFormJsonDecode[]
  }
  
  export interface ISection {
    section_id: string
    estimate_id: string
    custom_section_id: string
    section_name: string
    cost_code_id: string
    description: string
    user_id: string
    company_id: string
    modify_by: string
    parent_section_id: string
    demo_data: string
    date_added: string
    date_modified: string
    is_optional_section: string
    is_project_template: string
    project_template_id: string
    code_id: string
    csi_code: string
    parent_id: string
    csi_name: string
    is_deleted: string
    parent_code_id: string
    demo_parent_code_id: string
    test_id: string
    parent_id_back: string
    qb_date: string
    quickbook_costcode_id: string
    quickbook_parent_id: string
    qbc_id: string
    is_updated: string
    quickbook_level: string
    is_managed_level: string
    import_id: string
    show_on_timecard: string
    income_account_id: string
    expense_account_id: string
    has_no_child: string
    qb_type: string
    deleted_archived: string
    is_sample_parent: string
    cost_code_name: string
    section_total: string
    section_total_with_optional_item: string
    taxable_total: string
    markup_total: string
    markup_items_total: string
    total_w_o_tax_markup: string
    taxable_total_new: string
    items: IItem[]
  }
  
  export interface IItem {
    item_id: string
    estimate_id: string
    directory_id: string
    company_id: string
    equipment_id: string
    material_id: string
    cost_code_id: string
    tax_id: string
    subject: string
    quantity: string
    unit: string
    unit_cost: string
    hidden_markup: string
    markup: string
    description: string
    is_deleted: string
    date_added: string
    date_modified: string
    total: string
    estimate_item_no: string
    parent_item_id: string
    item_type: string
    reference_item_id: string
    assigned_to: string
    assigned_to_contact_id: string
    is_temaplate: string
    quickbook_estimateitem_id: string
    quickbook_item_id: string
    qbc_id: string
    item_on_database: string
    apply_global_tax: string
    section_id: string
    is_markup_percentage: string
    markup_amount: string
    bidder_item_id: string
    is_optional_item: string
    variation_id: string
    internal_notes: string
    one_build_id: string
    is_project_template: string
    project_template_id: string
    origin: string
    modified_unit_cost: string
    item_type_display_name: string
    item_type_name: string
    item_type_key: string
    company_estimate_id: string
    assignee_type: string
    assignee_name: string
    assigned_to_name_only: string
    assigned_to_company_name: string
    section_name: string
    custom_section_id: string
    source_name: string
    item_total: string
    cost_code_name: string
    cost_code: string
    code_id: string
    updated_unit_cost: string
    quickbook_costcode_id: string
    tax_rate: string
    origin_date_modified: string
    variation_name: string
    no_mu_total: string
  }
  
  export interface ItemsSummary {
    markupTotal: string
    itemTotal: string
    total_item_cnt: string
  }
  
  export interface Checklist {
    item_id: string
    estimate_id: string
    task_name: string
    reference_item_id: string
    company_id: string
    user_id: string
    show_on_pdf: string
    item_sort_order: string
    date_added: string
    date_modified: string
    task: string
    esw_item_id: string
    status: string
  }
  
  export interface AllItemTotal {
    material: Material
    labor: Labor
    equipment: Equipment
    sub_contractor: SubContractor
    other_item: OtherItem
    unassigned_item: UnassignedItem
    total: Total
  }
  
  export interface Material {
    estimated_total: string
    actual_total: string
    item_title: string
    due: string
  }
  
  export interface Labor {
    estimated_total: string
    actual_total: string
    item_title: string
    due: string
  }
  
  export interface Equipment {
    estimated_total: string
    actual_total: string
    item_title: string
    due: string
  }
  
  export interface SubContractor {
    estimated_total: string
    actual_total: string
    item_title: string
    due: string
  }
  
  export interface OtherItem {
    estimated_total: string
    actual_total: string
    item_title: string
    due: string
  }
  
  export interface UnassignedItem {
    estimated_total: string
    actual_total: string
    item_title: string
    due: string
  }
  
  export interface Total {
    estimated_total: string
    actual_total: string
    item_title: string
    due: string
  }
  
  export interface CustomFieldFormJsonDecode {
    type: string
    required: string
    label: string
    className: string
    name: string
    multiple: string
    values: Value[]
  }
  
  export interface Value {
    label: string
    value: string
    selected?: string
  }
  
  export interface Checklist2 {
    item_id: string
    estimate_id: string
    task_name: string
    reference_item_id: string
    company_id: string
    user_id: string
    show_on_pdf: string
    item_sort_order: string
    date_added: string
    date_modified: string
    task: string
    esw_item_id: string
    status: string
  }
  