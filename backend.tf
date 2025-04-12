terraform {
  backend "gcs" {
    bucket = "gcp-rish-tf-state"
    prefix = "terraform/state"
  }
}
