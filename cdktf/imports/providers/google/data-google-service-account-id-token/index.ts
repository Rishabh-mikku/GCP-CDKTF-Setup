// https://registry.terraform.io/providers/hashicorp/google/5.45.2/docs/data-sources/service_account_id_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleServiceAccountIdTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.45.2/docs/data-sources/service_account_id_token#delegates DataGoogleServiceAccountIdToken#delegates}
  */
  readonly delegates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.45.2/docs/data-sources/service_account_id_token#id DataGoogleServiceAccountIdToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.45.2/docs/data-sources/service_account_id_token#include_email DataGoogleServiceAccountIdToken#include_email}
  */
  readonly includeEmail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.45.2/docs/data-sources/service_account_id_token#target_audience DataGoogleServiceAccountIdToken#target_audience}
  */
  readonly targetAudience: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.45.2/docs/data-sources/service_account_id_token#target_service_account DataGoogleServiceAccountIdToken#target_service_account}
  */
  readonly targetServiceAccount?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.45.2/docs/data-sources/service_account_id_token google_service_account_id_token}
*/
export class DataGoogleServiceAccountIdToken extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_service_account_id_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleServiceAccountIdToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleServiceAccountIdToken to import
  * @param importFromId The id of the existing DataGoogleServiceAccountIdToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.45.2/docs/data-sources/service_account_id_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleServiceAccountIdToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_service_account_id_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.45.2/docs/data-sources/service_account_id_token google_service_account_id_token} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleServiceAccountIdTokenConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleServiceAccountIdTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_account_id_token',
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
    this._delegates = config.delegates;
    this._id = config.id;
    this._includeEmail = config.includeEmail;
    this._targetAudience = config.targetAudience;
    this._targetServiceAccount = config.targetServiceAccount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delegates - computed: false, optional: true, required: false
  private _delegates?: string[]; 
  public get delegates() {
    return cdktf.Fn.tolist(this.getListAttribute('delegates'));
  }
  public set delegates(value: string[]) {
    this._delegates = value;
  }
  public resetDelegates() {
    this._delegates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatesInput() {
    return this._delegates;
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

  // id_token - computed: true, optional: false, required: false
  public get idToken() {
    return this.getStringAttribute('id_token');
  }

  // include_email - computed: false, optional: true, required: false
  private _includeEmail?: boolean | cdktf.IResolvable; 
  public get includeEmail() {
    return this.getBooleanAttribute('include_email');
  }
  public set includeEmail(value: boolean | cdktf.IResolvable) {
    this._includeEmail = value;
  }
  public resetIncludeEmail() {
    this._includeEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeEmailInput() {
    return this._includeEmail;
  }

  // target_audience - computed: false, optional: false, required: true
  private _targetAudience?: string; 
  public get targetAudience() {
    return this.getStringAttribute('target_audience');
  }
  public set targetAudience(value: string) {
    this._targetAudience = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAudienceInput() {
    return this._targetAudience;
  }

  // target_service_account - computed: false, optional: true, required: false
  private _targetServiceAccount?: string; 
  public get targetServiceAccount() {
    return this.getStringAttribute('target_service_account');
  }
  public set targetServiceAccount(value: string) {
    this._targetServiceAccount = value;
  }
  public resetTargetServiceAccount() {
    this._targetServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetServiceAccountInput() {
    return this._targetServiceAccount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delegates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._delegates),
      id: cdktf.stringToTerraform(this._id),
      include_email: cdktf.booleanToTerraform(this._includeEmail),
      target_audience: cdktf.stringToTerraform(this._targetAudience),
      target_service_account: cdktf.stringToTerraform(this._targetServiceAccount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delegates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._delegates),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_email: {
        value: cdktf.booleanToHclTerraform(this._includeEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      target_audience: {
        value: cdktf.stringToHclTerraform(this._targetAudience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_service_account: {
        value: cdktf.stringToHclTerraform(this._targetServiceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
