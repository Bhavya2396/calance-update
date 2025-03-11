#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/illustrations/construction
mkdir -p public/images/tech/construction

# Download Construction illustrations from Undraw
curl -o public/images/illustrations/construction/hero.svg "https://raw.githubusercontent.com/undraw/undraw/master/illustrations/undraw_building_blocks.svg"
curl -o public/images/illustrations/construction/project-management-integration.svg "https://raw.githubusercontent.com/undraw/undraw/master/illustrations/undraw_project_team.svg"
curl -o public/images/illustrations/construction/resource-management.svg "https://raw.githubusercontent.com/undraw/undraw/master/illustrations/undraw_logistics.svg"
curl -o public/images/illustrations/construction/document-control.svg "https://raw.githubusercontent.com/undraw/undraw/master/illustrations/undraw_file_sync.svg"
curl -o public/images/illustrations/construction/team-collaboration.svg "https://raw.githubusercontent.com/undraw/undraw/master/illustrations/undraw_team_collaboration.svg"
curl -o public/images/illustrations/construction/cta.svg "https://raw.githubusercontent.com/undraw/undraw/master/illustrations/undraw_construction.svg"

# Download construction technology icons from Simple Icons
curl -o public/images/tech/construction/procore.svg "https://cdn.simpleicons.org/procore/white"
curl -o public/images/tech/construction/autodesk.svg "https://cdn.simpleicons.org/autodesk/white"
curl -o public/images/tech/construction/plangrid.svg "https://cdn.simpleicons.org/plangrid/white"
curl -o public/images/tech/construction/sage.svg "https://cdn.simpleicons.org/sage/white"
curl -o public/images/tech/construction/trimble.svg "https://cdn.simpleicons.org/trimble/white"
curl -o public/images/tech/construction/bluebeam.svg "https://cdn.simpleicons.org/bluebeam/white"
curl -o public/images/tech/construction/constructconnect.svg "https://cdn.simpleicons.org/constructconnect/white"
curl -o public/images/tech/construction/viewpoint.svg "https://cdn.simpleicons.org/viewpoint/white"
curl -o public/images/tech/construction/raken.svg "https://cdn.simpleicons.org/raken/white"
curl -o public/images/tech/construction/coconstruct.svg "https://cdn.simpleicons.org/coconstruct/white"
curl -o public/images/tech/construction/buildertrend.svg "https://cdn.simpleicons.org/buildertrend/white"
curl -o public/images/tech/construction/redteam.svg "https://cdn.simpleicons.org/redteam/white" 