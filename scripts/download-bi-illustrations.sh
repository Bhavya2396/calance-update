#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/illustrations/business-intelligence
mkdir -p public/images/tech/business-intelligence

# Download Business Intelligence illustrations from Undraw
curl -o public/images/illustrations/business-intelligence/hero.svg "https://raw.githubusercontent.com/undraw/undraw/master/illustrations/undraw_data_trends.svg"
curl -o public/images/illustrations/business-intelligence/analytics.svg "https://raw.githubusercontent.com/undraw/undraw/master/illustrations/undraw_data_visualization.svg"
curl -o public/images/illustrations/business-intelligence/predictive.svg "https://raw.githubusercontent.com/undraw/undraw/master/illustrations/undraw_predictive_analytics.svg"
curl -o public/images/illustrations/business-intelligence/dashboards.svg "https://raw.githubusercontent.com/undraw/undraw/master/illustrations/undraw_dashboard.svg"
curl -o public/images/illustrations/business-intelligence/integration.svg "https://raw.githubusercontent.com/undraw/undraw/master/illustrations/undraw_data_processing.svg"
curl -o public/images/illustrations/business-intelligence/cta.svg "https://raw.githubusercontent.com/undraw/undraw/master/illustrations/undraw_business_analytics.svg"

# Download BI technology icons from Simple Icons
curl -o public/images/tech/business-intelligence/tableau.svg "https://cdn.simpleicons.org/tableau/white"
curl -o public/images/tech/business-intelligence/powerbi.svg "https://cdn.simpleicons.org/powerbi/white"
curl -o public/images/tech/business-intelligence/python.svg "https://cdn.simpleicons.org/python/white"
curl -o public/images/tech/business-intelligence/r.svg "https://cdn.simpleicons.org/r/white"
curl -o public/images/tech/business-intelligence/tensorflow.svg "https://cdn.simpleicons.org/tensorflow/white"
curl -o public/images/tech/business-intelligence/spark.svg "https://cdn.simpleicons.org/apachespark/white"
curl -o public/images/tech/business-intelligence/snowflake.svg "https://cdn.simpleicons.org/snowflake/white"
curl -o public/images/tech/business-intelligence/databricks.svg "https://cdn.simpleicons.org/databricks/white"
curl -o public/images/tech/business-intelligence/looker.svg "https://cdn.simpleicons.org/looker/white"
curl -o public/images/tech/business-intelligence/alteryx.svg "https://cdn.simpleicons.org/alteryx/white"
curl -o public/images/tech/business-intelligence/sas.svg "https://cdn.simpleicons.org/sas/white"
curl -o public/images/tech/business-intelligence/qlik.svg "https://cdn.simpleicons.org/qlik/white" 