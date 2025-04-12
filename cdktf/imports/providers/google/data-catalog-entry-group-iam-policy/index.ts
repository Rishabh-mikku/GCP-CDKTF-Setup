// https://registry.terraform.io/providers/hashicorp/google/5.45.2/docs/resources/data_catalog_entry_group_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalogEntryGroupIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.45.2/docs/resources/data_catalog_entry_group_iam_policy#entry_group DataCatalogEntryGroupIamPolicy#entry_group}
  */
  readonly entryGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.45.2/docs/resources/data_catalog_entry_group_iam_policy#id DataCatalogEntryGroupIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.45.2/docs/resources/data_catalog_entry_group_iam_policy#policy_data DataCatalogEntryGroupIamPolicy#policy_data}
  */
  readonly policyData: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.45.2/docs/resources/data_catalog_entry_group_iam_policy#project DataCatalogEntryGroupIamPolicy#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.45.2/docs/resources/data_catalog_entry_group_iam_policy#region DataCatalogEntryGroupIamPolicy#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.45.2/docs/resources/data_catalog_entry_group_iam_policy google_data_catalog_entry_group_iam_policy}
*/
export class DataCatalogEntryGroupIamPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_data_catalog_entry_group_iam_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalogEntryGroupIamPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalogEntryGroupIamPolicy to import
  * @param importFromId The id of the existing DataCatalogEntryGroupIamPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.45.2/docs/resources/data_catalog_entry_group_iam_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalogEntryGroupIamPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_data_catalog_entry_group_iam_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.45.2/docs/resources/data_catalog_entry_group_iam_policy google_data_catalog_entry_group_iam_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalogEntryGroupIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalogEntryGroupIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_catalog_entry_group_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.45.2',
        providerVersionConstraint: '~> 5.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entryGroup = config.entryGroup;
    this._id = config.id;
    this._policyData = config.policyData;
    this._project = config.project;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entry_group - computed: false, optional: false, required: true
  private _entryGroup?: string; 
  public get entryGroup() {
    return this.getStringAttribute('entry_group');
  }
  public set entryGroup(value: string) {
    this._entryGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryGroupInput() {
    return this._entryGroup;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // policy_data - computed: false, optional: false, required: true
  private _policyData?: string; 
  public get policyData() {
    return this.getStringAttribute('policy_data');
  }
  public set policyData(value: string) {
    this._policyData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDataInput() {
    return this._policyData;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entry_group: cdktf.stringToTerraform(this._entryGroup),
      id: cdktf.stringToTerraform(this._id),
      policy_data: cdktf.stringToTerraform(this._policyData),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entry_group: {
        value: cdktf.stringToHclTerraform(this._entryGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_data: {
        value: cdktf.stringToHclTerraform(this._policyData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
