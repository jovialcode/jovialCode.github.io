---
slug: "kafka-listener"
title: "Kafka Listener"
date: "2024-04-23"
category: "Kafka"
featuredImage: "../static/images/contents/java/kafka_listener.png"
---
### Kafaka Listener 어노테이션은 어떻게 동작하는걸까?

`@KafakaListener` 스프링 부트가 구동되고 Bean에 대한 초기화 작업 과정에서
`KafkaListenerAnnotationBeanPostProcessor`에 의해서 `@KafakaListener` 는 
`KafkaListenerEndPoint`로 처리되고 `KakkaListenerContainerFactory`와 함께 `KafkaListenerEndpointRegistry`에 저장된다.
autoStart가 True일 경우 Registry에 등록되면서 KafkaListenerContainer는 동작하게 된다.  
### 
ConcurrentKafkaListenerContainer의 this.concurrency가 topicPartitions보다 큰 경우는 topicPartitions.length에 맞춰진다. 
this.concurrency의 맞게 `KafkaMessageListenerContainer` 가 생성된다. 
`KafkaMessageListenerContainer`에는 `ListenerConsumer`Inner Class가 존재하며 ConsumeRecord를 처리하는 것은 로직을 갖고 있다. 
그러므로 this.concurrency에 따라서 Consumer가 개수가 결정된다. this.concurrency가 15이더라도 topics의 partitions의 개수에 따라 Consumer가 동작한다.
자세한 내용은 아래 공식홈페이지 인용글을 참고
### 
> When listening to multiple topics, the default partition distribution may not be what you expect. For example, if you have three topics with five partitions each and you want to use `concurrency=15`, you see only five active consumers, each assigned one partition from each topic, with the other 10 consumers being idle. This is because the default Kafka `PartitionAssignor` is the `RangeAssignor` (see its Javadoc). For this scenario, you may want to consider using the `RoundRobinAssignor` instead, which distributes the partitions across all of the consumers. Then, each consumer is assigned one topic or partition. To change the `PartitionAssignor`, you can set the `partition.assignment.strategy` consumer property (`ConsumerConfigs.PARTITION_ASSIGNMENT_STRATEGY_CONFIG`) in the properties provided to the `DefaultKafkaConsumerFactory`.
###
`ListenerConsumer`는 동작하는 동안 `pollAndInvoke`함수를 주기적으로 호출하게 된다. 
pollAndInvoke 함수가 실제 `@KafkaListner` 어노테이션을 설정한 Method를 호출하므로 Consumer에게는 가장 중요한 함수다. 
polling을 하기 전에 우선 commits 처리를 하며 필요한 경우 잠시 대기하는 시간을 갖는다. 
이후 데이터를 polling한 다음 Interceptor를 통해 ConsumeRecord에 대한 처리한 후 `@KafkaListener` 함수를 호출한다.  