import { Metadata } from 'next'
import Image from 'next/image'
import SolutionLayout from '@/components/SolutionLayout'

export const metadata: Metadata = {
  title: 'Integrations Solutions | Blit Software',
  description: 'Enterprise-grade integration solutions for seamless connectivity, data synchronization, and workflow automation.',
}

const features = [
  {
    id: 'api-integration',
    name: 'API Integration',
    description: 'Connect and orchestrate APIs across your enterprise ecosystem with our robust integration platform. Support for REST, GraphQL, SOAP, and custom protocols.',
    icon: 'api',
    illustration: '/images/illustrations/integrations/api-integration.svg',
    metrics: [
      { label: 'API Response Time', value: '-65%' },
      { label: 'Integration Success', value: '99.9%' },
    ],
  },
  {
    id: 'data-sync',
    name: 'Data Synchronization',
    description: 'Real-time data synchronization between systems with intelligent conflict resolution, versioning, and rollback capabilities.',
    icon: 'sync',
    illustration: '/images/illustrations/integrations/data-sync.svg',
    metrics: [
      { label: 'Data Accuracy', value: '99.99%' },
      { label: 'Sync Speed', value: '+200%' },
    ],
  },
  {
    id: 'cloud-connect',
    name: 'Cloud Connectivity',
    description: 'Seamless integration with major cloud platforms and services. Connect your applications with AWS, Azure, Google Cloud, and more.',
    icon: 'cloud',
    illustration: '/images/illustrations/integrations/cloud-connect.svg',
    metrics: [
      { label: 'Cloud Services', value: '50+' },
      { label: 'Uptime', value: '99.99%' },
    ],
  },
  {
    id: 'workflow-automation',
    name: 'Workflow Automation',
    description: 'Design and deploy automated workflows that connect your business processes, trigger actions, and streamline operations.',
    icon: 'workflow',
    illustration: '/images/illustrations/integrations/workflow-automation.svg',
    metrics: [
      { label: 'Process Time', value: '-75%' },
      { label: 'Manual Tasks', value: '-90%' },
    ],
  },
]

const technologies = [
  {
    category: 'Protocol',
    items: ['REST', 'GraphQL', 'SOAP', 'gRPC', 'WebSocket', 'MQTT'],
  },
  {
    category: 'Messaging',
    items: ['RabbitMQ', 'Apache Kafka', 'Redis Pub/Sub', 'AWS SQS', 'Azure Service Bus'],
  },
  {
    category: 'Integration',
    items: ['Apache Camel', 'Spring Integration', 'MuleSoft', 'Dell Boomi', 'Zapier'],
  },
  {
    category: 'Automation',
    items: ['Airflow', 'Jenkins', 'GitHub Actions', 'Azure Logic Apps', 'AWS Step Functions'],
  },
  {
    category: 'Serverless',
    items: ['AWS Lambda', 'Azure Functions', 'Google Cloud Functions', 'Cloudflare Workers'],
  },
  {
    category: 'Containers',
    items: ['Docker', 'Kubernetes', 'OpenShift', 'AWS ECS', 'Azure Container Apps'],
  },
  {
    category: 'Orchestration',
    items: ['Kubernetes', 'Docker Swarm', 'Nomad', 'AWS EKS', 'Azure AKS'],
  },
  {
    category: 'Caching',
    items: ['Redis', 'Memcached', 'Hazelcast', 'AWS ElastiCache', 'Azure Cache'],
  },
  {
    category: 'Search',
    items: ['Elasticsearch', 'Solr', 'Algolia', 'AWS OpenSearch', 'Azure Cognitive Search'],
  },
]

const successMetrics = [
  {
    metric: 'Integration Speed',
    value: '75%',
    description: 'Faster integration deployment',
  },
  {
    metric: 'Data Accuracy',
    value: '99.9%',
    description: 'Data synchronization accuracy',
  },
  {
    metric: 'System Uptime',
    value: '99.99%',
    description: 'Integration platform availability',
  },
  {
    metric: 'Cost Savings',
    value: '60%',
    description: 'Reduction in integration costs',
  },
]

export default function Integrations() {
  return (
    <SolutionLayout
      title="Enterprise Integration Solutions"
      description="Connect, synchronize, and automate your business systems with our enterprise-grade integration platform."
      features={features}
      technologies={technologies}
      successMetrics={successMetrics}
      heroImage="/images/illustrations/integrations/hero.svg"
    />
  )
} 