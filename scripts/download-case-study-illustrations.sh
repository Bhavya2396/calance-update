#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/illustrations/case-studies/{procore-xero,pmweb-peoplesoft,spotmentor-devops,alpha-fortress}

# Function to download SVG with proper headers
download_svg() {
    curl -L -H "Accept: image/svg+xml" -o "$2" "$1"
}

# Procore + Xero Integration Case Study
download_svg "https://raw.githubusercontent.com/undraw/undraw/develop/svg/data_sync.svg" "public/images/illustrations/case-studies/procore-xero/hero.svg"
download_svg "https://raw.githubusercontent.com/undraw/undraw/develop/svg/data_processing.svg" "public/images/illustrations/case-studies/procore-xero/challenge.svg"
download_svg "https://raw.githubusercontent.com/undraw/undraw/develop/svg/cloud_sync.svg" "public/images/illustrations/case-studies/procore-xero/solution.svg"
download_svg "https://raw.githubusercontent.com/undraw/undraw/develop/svg/software_engineer.svg" "public/images/illustrations/case-studies/procore-xero/implementation.svg"
download_svg "https://raw.githubusercontent.com/undraw/undraw/develop/svg/growth_analytics.svg" "public/images/illustrations/case-studies/procore-xero/results.svg"

# PMWeb + PeopleSoft Integration Case Study
download_svg "https://raw.githubusercontent.com/undraw/undraw/develop/svg/connected_world.svg" "public/images/illustrations/case-studies/pmweb-peoplesoft/hero.svg"
download_svg "https://raw.githubusercontent.com/undraw/undraw/develop/svg/project_team.svg" "public/images/illustrations/case-studies/pmweb-peoplesoft/challenge.svg"
download_svg "https://raw.githubusercontent.com/undraw/undraw/develop/svg/server_cluster.svg" "public/images/illustrations/case-studies/pmweb-peoplesoft/solution.svg"
download_svg "https://raw.githubusercontent.com/undraw/undraw/develop/svg/code_review.svg" "public/images/illustrations/case-studies/pmweb-peoplesoft/implementation.svg"
download_svg "https://raw.githubusercontent.com/undraw/undraw/develop/svg/data_trends.svg" "public/images/illustrations/case-studies/pmweb-peoplesoft/results.svg"

# Spotmentor DevOps Implementation Case Study
download_svg "https://raw.githubusercontent.com/undraw/undraw/develop/svg/developer_activity.svg" "public/images/illustrations/case-studies/spotmentor-devops/hero.svg"
download_svg "https://raw.githubusercontent.com/undraw/undraw/develop/svg/version_control.svg" "public/images/illustrations/case-studies/spotmentor-devops/challenge.svg"
download_svg "https://raw.githubusercontent.com/undraw/undraw/develop/svg/container_ship.svg" "public/images/illustrations/case-studies/spotmentor-devops/solution.svg"
download_svg "https://raw.githubusercontent.com/undraw/undraw/develop/svg/continuous_integration.svg" "public/images/illustrations/case-studies/spotmentor-devops/implementation.svg"
download_svg "https://raw.githubusercontent.com/undraw/undraw/develop/svg/charts.svg" "public/images/illustrations/case-studies/spotmentor-devops/results.svg"

# Alpha Fortress DevOps Implementation Case Study
download_svg "https://raw.githubusercontent.com/undraw/undraw/develop/svg/security.svg" "public/images/illustrations/case-studies/alpha-fortress/hero.svg"
download_svg "https://raw.githubusercontent.com/undraw/undraw/develop/svg/secure_server.svg" "public/images/illustrations/case-studies/alpha-fortress/challenge.svg"
download_svg "https://raw.githubusercontent.com/undraw/undraw/develop/svg/cloud_hosting.svg" "public/images/illustrations/case-studies/alpha-fortress/solution.svg"
download_svg "https://raw.githubusercontent.com/undraw/undraw/develop/svg/deployment.svg" "public/images/illustrations/case-studies/alpha-fortress/implementation.svg"
download_svg "https://raw.githubusercontent.com/undraw/undraw/develop/svg/monitoring.svg" "public/images/illustrations/case-studies/alpha-fortress/results.svg"

# Make the script executable
chmod +x scripts/download-case-study-illustrations.sh 