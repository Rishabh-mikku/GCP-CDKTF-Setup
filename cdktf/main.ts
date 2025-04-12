import { App, TerraformStack, TerraformOutput } from 'cdktf';
import { Construct } from 'constructs';
import { GoogleProvider } from '@cdktf/provider-google/lib/provider';
import { ProjectService } from '@cdktf/provider-google/lib/project-service'
import { StorageBucket } from '@cdktf/provider-google/lib/storage-bucket';
import { ComputeInstance } from '@cdktf/provider-google/lib/compute-instance';

class GCPCdkStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // Configure Google Provider
    new GoogleProvider(this, 'GoogleProvider', {
      project: 'cdkterraform',
      region: 'us-central1',
      zone: 'us-central1-a'
    });

    // Enable required apis
    const apis = [
      'compute.googleapis.com',
      'storage.googleapis.com',
    ];

    apis.forEach((service, index) => {
      new ProjectService(this, `Service-${index}`, {
        service,
        disableOnDestroy: false,
      });
    });

    // Create Storage Bucket
    const bucket = new StorageBucket(this, 'CdktfBucket', {
      name: "cdktf-storage-bucket",
      location: 'US',
      forceDestroy: true,
    });

    // Create Compute Instance
    const instance = new ComputeInstance(this, 'CdktfInstance', {
      name: "cdktf-vm-instance",
      machineType: 'e2-micro',
      zone: 'us-central1-a',
      bootDisk: {
        initializeParams: {
          image: 'debian-cloud/debian-11',
        },
      },
      networkInterface: [{
        network: 'default',
        accessConfig: [{}]
      }],
    });

    // Output bucket name and instance name
    new TerraformOutput(this, 'tf-output-bucket', {
      value: bucket.name,
    });

    new TerraformOutput(this, 'tf-output-instance', {
      value: instance.name,
    });
  }
}

const app = new App();
new GCPCdkStack(app, 'cdktf');
app.synth();
