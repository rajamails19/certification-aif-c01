type Concept = [needle: string, description: string];

const concepts: Concept[] = [
  ["source code", "Source code is the program logic used to train or run a model."],
  ["partial dependence plots", "Partial dependence plots show how one input feature changes a model’s prediction on average."],
  ["training records", "Training records are the examples used to teach a model patterns during training."],
  ["convergence logs", "Convergence logs show whether a model’s training loss is stabilizing over time."],
  ["named-entity recognition", "Named-entity recognition identifies items such as people, organizations, dates, and locations in text."],
  ["policy recommendation", "A recommendation engine suggests relevant products, content, or actions based on user behavior or similarity."],
  ["document summarization", "Document summarization condenses a long document into its key facts."],
  ["multilingual translation", "Machine translation converts text from one language into another."],
  ["state the length", "Prompt instructions specify the output’s length, language, tone, or format."],
  ["select a larger model", "A larger model may have more capability, but it does not directly set language or response length."],
  ["raise temperature", "Temperature controls randomness: lower values are more predictable; higher values are more varied."],
  ["raise top-k", "Top-k limits token selection to the k most likely next tokens; raising it allows more variety."],
  ["sagemaker clarify", "SageMaker Clarify detects bias and explains how features influence model predictions."],
  ["sagemaker model monitor", "SageMaker Model Monitor detects data and model-quality drift in production."],
  ["sagemaker model cards", "SageMaker Model Cards document a model’s purpose, performance, risks, and limitations."],
  ["sagemaker data wrangler", "SageMaker Data Wrangler prepares, transforms, and analyzes data for machine learning."],
  ["sagemaker ground truth", "SageMaker Ground Truth creates high-quality labeled datasets with automated or human review."],
  ["sagemaker feature store", "SageMaker Feature Store centrally stores and reuses governed ML features."],
  ["sagemaker jumpstart", "SageMaker JumpStart provides pretrained models and ready-to-use ML solutions."],
  ["serverless inference", "Serverless Inference runs intermittent predictions without managing or pre-provisioning servers."],
  ["asynchronous inference", "Asynchronous inference handles large payloads or long-running requests without keeping a connection open."],
  ["batch transform", "Batch Transform processes a stored dataset in bulk when an immediate response is unnecessary."],
  ["real-time inference", "Real-time inference keeps an endpoint available for low-latency, interactive predictions."],
  ["bedrock knowledge base", "A Bedrock knowledge base retrieves relevant private information to ground a model’s response."],
  ["agents for amazon bedrock", "Bedrock Agents plan steps and call tools or knowledge bases to complete user tasks."],
  ["amazon bedrock", "Amazon Bedrock provides managed access to foundation models for generative AI applications."],
  ["amazon comprehend", "Amazon Comprehend extracts meaning from text, including entities, key phrases, and sentiment."],
  ["amazon rekognition", "Amazon Rekognition analyzes images and video for objects, faces, labels, and unsafe content."],
  ["amazon transcribe", "Amazon Transcribe converts spoken audio into text."],
  ["amazon translate", "Amazon Translate performs neural machine translation between languages."],
  ["amazon polly", "Amazon Polly converts written text into lifelike speech."],
  ["amazon lex", "Amazon Lex builds conversational voice and text interfaces using intents and slots."],
  ["amazon personalize", "Amazon Personalize creates individualized recommendations from user-interaction data."],
  ["amazon kendra", "Amazon Kendra is an intelligent enterprise search service for documents and knowledge sources."],
  ["amazon textract", "Amazon Textract extracts printed text, handwriting, forms, and tables from documents."],
  ["amazon fraud detector", "Amazon Fraud Detector builds fraud-risk predictions from event data."],
  ["amazon macie", "Amazon Macie discovers and reports sensitive data stored in Amazon S3."],
  ["amazon inspector", "Amazon Inspector scans workloads and container images for software vulnerabilities and exposure."],
  ["aws key management service", "AWS KMS creates and controls encryption keys used to protect data."],
  ["aws kms", "AWS KMS creates and controls encryption keys used to protect data."],
  ["aws secrets manager", "Secrets Manager securely stores and rotates credentials, API keys, and other secrets."],
  ["aws cloudtrail", "AWS CloudTrail records AWS API activity for auditing and investigation."],
  ["amazon cloudwatch", "Amazon CloudWatch collects operational metrics, logs, alarms, and application telemetry."],
  ["aws config", "AWS Config records resource configurations and evaluates them against compliance rules."],
  ["aws audit manager", "AWS Audit Manager continuously collects evidence for audits and compliance assessments."],
  ["aws artifact", "AWS Artifact provides AWS compliance reports and agreements on demand."],
  ["aws identity and access management", "IAM controls who can perform which actions on specific AWS resources."],
  ["aws privateLink", "AWS PrivateLink connects a VPC privately to supported services without public internet traffic."],
  ["aws privatelink", "AWS PrivateLink connects a VPC privately to supported services without public internet traffic."],
  ["amazon s3", "Amazon S3 is durable object storage for files, datasets, logs, and model artifacts."],
  ["amazon cloudfront", "Amazon CloudFront is a content delivery network that caches content near users."],
  ["aws lambda", "AWS Lambda runs event-driven code without managing servers."],
  ["amazon ec2", "Amazon EC2 provides configurable virtual machines that the customer manages."],
  ["amazon elastic kubernetes service", "Amazon EKS runs managed Kubernetes clusters for containerized workloads."],
  ["amazon aurora postgresql", "Aurora PostgreSQL is a relational database that can also store and search vectors with pgvector."],
  ["amazon redshift", "Amazon Redshift is a managed data warehouse for large-scale SQL analytics."],
  ["amazon athena", "Amazon Athena runs serverless SQL queries directly against data in Amazon S3."],
  ["amazon emr", "Amazon EMR runs big-data frameworks such as Spark and Hadoop."],
  ["aws glue", "AWS Glue discovers, catalogs, prepares, and integrates data for analytics."],
  ["aws lake formation", "Lake Formation centrally governs and shares data stored in an AWS data lake."],
  ["amazon opensearch", "Amazon OpenSearch Service supports search, analytics, and vector similarity retrieval."],
  ["amazon quicksight", "Amazon QuickSight creates business-intelligence dashboards and visual analyses."],
  ["amazon q developer", "Amazon Q Developer assists with software development, AWS guidance, and code generation."],
  ["aws healthscribe", "AWS HealthScribe turns clinical conversations into transcripts and preliminary clinical notes."],
  ["r-squared", "R-squared measures how much variation a regression model explains; it is not a classification metric."],
  ["root mean squared error", "RMSE measures the typical size of numeric prediction errors in regression; lower is better."],
  ["rmse", "RMSE measures the typical size of numeric prediction errors in regression; lower is better."],
  ["accuracy", "Accuracy is correct predictions divided by total predictions, commonly used for classification."],
  ["precision", "Precision asks: of the items predicted positive, how many were actually positive?"],
  ["recall", "Recall asks: of all actual positive items, how many did the model find?"],
  ["f1 score", "F1 is the harmonic mean of precision and recall and balances both measures."],
  ["auc", "AUC measures how well a classifier ranks positive examples above negative examples across thresholds."],
  ["bertscore", "BERTScore evaluates generated text by comparing contextual semantic similarity with reference text."],
  ["rouge", "ROUGE evaluates summaries by measuring overlap with a reference summary."],
  ["bleu", "BLEU measures n-gram overlap and is commonly used to evaluate machine translation."],
  ["perplexity", "Perplexity measures how uncertain a language model is when predicting text; lower is generally better."],
  ["learning rate", "Learning rate controls how large each model-weight update is during training."],
  ["loss function", "A loss function quantifies prediction error during training so the model can optimize its weights."],
  ["latency", "Latency measures how long the system takes to return a prediction or response."],
  ["context window", "The context window is the maximum amount of tokenized input a model can consider at once."],
  ["temperature", "Temperature controls randomness: lower values are more predictable; higher values are more varied."],
  ["top-k", "Top-k limits token selection to the k most likely next tokens."],
  ["top-p", "Top-p samples from the smallest token set whose combined probability reaches p."],
  ["embedding", "An embedding represents meaning as a numeric vector for similarity search and retrieval."],
  ["decision tree", "A decision tree follows visible branching rules, making its predictions comparatively explainable."],
  ["logistic regression", "Logistic regression estimates class probabilities and is commonly used for classification."],
  ["linear regression", "Linear regression predicts a continuous numeric value from a weighted combination of features."],
  ["neural network", "A neural network learns complex patterns but is usually less directly explainable than a simple tree."],
  ["k-nearest neighbors", "k-NN predicts from the labels or values of the most similar nearby examples."],
  ["k-nn", "k-NN predicts from the labels or values of the most similar nearby examples."],
  ["k-means", "K-means is unsupervised clustering that groups similar unlabeled examples."],
  ["k-mean", "K-means is unsupervised clustering that groups similar unlabeled examples."],
  ["arima", "ARIMA forecasts future numeric values from patterns in time-series data."],
  ["supervised learning", "Supervised learning trains on examples that include known target labels or values."],
  ["unsupervised learning", "Unsupervised learning discovers patterns or clusters in data without target labels."],
  ["reinforcement learning", "Reinforcement learning improves actions through rewards and penalties from an environment."],
  ["transfer learning", "Transfer learning adapts knowledge from an existing trained model to a related task."],
  ["federated learning", "Federated learning trains across decentralized data sources without centralizing raw data."],
  ["fine-tuning", "Fine-tuning updates a pretrained model using task- or domain-specific training examples."],
  ["retrieval augmented generation", "RAG retrieves relevant external information and supplies it to a model at query time."],
  ["rag", "RAG retrieves relevant external information and supplies it to a model at query time."],
  ["zero-shot", "Zero-shot prompting asks the model to perform a task without providing examples."],
  ["few-shot", "Few-shot prompting includes a small number of examples that demonstrate the expected behavior."],
  ["chain-of-thought", "Chain-of-thought prompting encourages intermediate reasoning steps for a complex task."],
  ["negative prompt", "A negative prompt states content or characteristics that the generated output should avoid."],
  ["text summarization", "Text summarization condenses source material while preserving its main information."],
  ["text generation", "Text generation creates new natural-language content from instructions or context."],
  ["text completion", "Text completion continues an existing passage based on its preceding context."],
  ["text classification", "Text classification assigns predefined labels or categories to written content."],
  ["object detection", "Object detection identifies both what objects appear in an image and where they are located."],
  ["anomaly detection", "Anomaly detection finds observations that differ significantly from an established pattern."],
  ["human-in-the-loop", "Human-in-the-loop review adds human judgment to verify or correct uncertain model outputs."],
  ["data augmentation", "Data augmentation creates varied training examples to improve representation and generalization."],
  ["model drift", "Model drift occurs when production data or relationships change and model quality degrades."],
  ["model complexity", "Model complexity affects interpretability and the risk of overfitting; simpler models are usually easier to explain."],
  ["semantic robustness", "Semantic robustness measures whether meaning-preserving input changes produce consistent outputs."],
  ["modality", "Modality describes the input or output type a model supports, such as text, image, audio, or video."],
];

const conceptDescription = (option: string) => {
  const normalized = option.toLowerCase();
  return concepts.find(([needle]) => normalized.includes(needle.toLowerCase()))?.[1];
};

const generalDefinition = (option: string) => {
  const text = option.toLowerCase();

  if (text.includes("epoch")) return "An epoch is one complete pass through the training dataset.";
  if (text.includes("regularization")) return "Regularization limits model complexity to help reduce overfitting.";
  if (text.includes("hyperparameter")) return "A hyperparameter is a training setting chosen before or during model training.";
  if (text.includes("training data") || text.includes("training dataset")) return "Training data is the set of examples used to teach a model patterns.";
  if (text.includes("validation")) return "Validation data checks model quality during development without being used to fit the model.";
  if (text.includes("inference")) return "Inference uses a trained model to make predictions on new input.";
  if (text.includes("deployment") || text.includes("endpoint")) return "Deployment makes a trained model available for real-world predictions.";
  if (text.includes("encrypt") || text.includes("decryption")) return "Encryption protects data so only authorized identities can read it.";
  if (text.includes("internet gateway") || text.includes("public internet")) return "An internet gateway provides a VPC route to and from the public internet.";
  if (text.includes("prompt")) return "A prompt supplies instructions and context that guide a foundation model’s response.";
  if (text.includes("model")) return "A model is a learned system that produces predictions or generated output from input.";
  if (text.includes("data")) return "Data is information collected and prepared for analysis, training, or decision-making.";
  return "An alternative approach or capability used in AI and AWS solution design.";
};

export const optionExplanation = (option: string) =>
  conceptDescription(option) ?? generalDefinition(option);
