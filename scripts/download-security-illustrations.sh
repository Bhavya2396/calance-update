#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/illustrations/security
mkdir -p public/images/tech/security

# Download Security illustrations from Undraw
curl -o public/images/illustrations/security/hero.svg "https://raw.githubusercontent.com/undraw/undraw/master/illustrations/undraw_security.svg"
curl -o public/images/illustrations/security/security-assessment.svg "https://raw.githubusercontent.com/undraw/undraw/master/illustrations/undraw_security_on.svg"
curl -o public/images/illustrations/security/compliance-management.svg "https://raw.githubusercontent.com/undraw/undraw/master/illustrations/undraw_authentication.svg"
curl -o public/images/illustrations/security/identity-access.svg "https://raw.githubusercontent.com/undraw/undraw/master/illustrations/undraw_access_control.svg"
curl -o public/images/illustrations/security/vulnerability-management.svg "https://raw.githubusercontent.com/undraw/undraw/master/illustrations/undraw_bug_fixing.svg"
curl -o public/images/illustrations/security/cta.svg "https://raw.githubusercontent.com/undraw/undraw/master/illustrations/undraw_secure_server.svg"

# Download security technology icons from Simple Icons
curl -o public/images/tech/security/crowdstrike.svg "https://cdn.simpleicons.org/crowdstrike/white"
curl -o public/images/tech/security/okta.svg "https://cdn.simpleicons.org/okta/white"
curl -o public/images/tech/security/splunk.svg "https://cdn.simpleicons.org/splunk/white"
curl -o public/images/tech/security/qualys.svg "https://cdn.simpleicons.org/qualys/white"
curl -o public/images/tech/security/palo-alto.svg "https://cdn.simpleicons.org/paloaltonetworks/white"
curl -o public/images/tech/security/azure-security.svg "https://cdn.simpleicons.org/microsoftazure/white"
curl -o public/images/tech/security/aws-security.svg "https://cdn.simpleicons.org/amazonaws/white"
curl -o public/images/tech/security/hashicorp-vault.svg "https://cdn.simpleicons.org/vault/white"
curl -o public/images/tech/security/rapid7.svg "https://cdn.simpleicons.org/rapid7/white"
curl -o public/images/tech/security/tenable.svg "https://cdn.simpleicons.org/tenable/white"
curl -o public/images/tech/security/fortinet.svg "https://cdn.simpleicons.org/fortinet/white"
curl -o public/images/tech/security/cyberark.svg "https://cdn.simpleicons.org/cyberark/white" 