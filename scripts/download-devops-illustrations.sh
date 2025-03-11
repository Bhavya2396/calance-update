#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/illustrations/devops
mkdir -p public/images/tech/devops

# Download DevOps illustrations from Undraw
curl -o public/images/illustrations/devops/hero.svg "https://raw.githubusercontent.com/undraw/undraw/master/illustrations/undraw_developer_activity.svg"
curl -o public/images/illustrations/devops/ci-cd.svg "https://raw.githubusercontent.com/undraw/undraw/master/illustrations/undraw_continuous_integration.svg"
curl -o public/images/illustrations/devops/infrastructure.svg "https://raw.githubusercontent.com/undraw/undraw/master/illustrations/undraw_server_cluster.svg"
curl -o public/images/illustrations/devops/containers.svg "https://raw.githubusercontent.com/undraw/undraw/master/illustrations/undraw_container_ship.svg"
curl -o public/images/illustrations/devops/monitoring.svg "https://raw.githubusercontent.com/undraw/undraw/master/illustrations/undraw_monitoring.svg"
curl -o public/images/illustrations/devops/cta.svg "https://raw.githubusercontent.com/undraw/undraw/master/illustrations/undraw_code_review.svg"

# Download DevOps technology icons from Simple Icons
curl -o public/images/tech/devops/jenkins.svg "https://cdn.simpleicons.org/jenkins/white"
curl -o public/images/tech/devops/gitlab.svg "https://cdn.simpleicons.org/gitlab/white"
curl -o public/images/tech/devops/kubernetes.svg "https://cdn.simpleicons.org/kubernetes/white"
curl -o public/images/tech/devops/docker.svg "https://cdn.simpleicons.org/docker/white"
curl -o public/images/tech/devops/terraform.svg "https://cdn.simpleicons.org/terraform/white"
curl -o public/images/tech/devops/ansible.svg "https://cdn.simpleicons.org/ansible/white"
curl -o public/images/tech/devops/prometheus.svg "https://cdn.simpleicons.org/prometheus/white"
curl -o public/images/tech/devops/elk.svg "https://cdn.simpleicons.org/elastic/white"
curl -o public/images/tech/devops/argocd.svg "https://cdn.simpleicons.org/argo/white"
curl -o public/images/tech/devops/grafana.svg "https://cdn.simpleicons.org/grafana/white"
curl -o public/images/tech/devops/hashicorp.svg "https://cdn.simpleicons.org/hashicorp/white"
curl -o public/images/tech/devops/newrelic.svg "https://cdn.simpleicons.org/newrelic/white" 