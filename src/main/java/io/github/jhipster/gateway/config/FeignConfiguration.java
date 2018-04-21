package io.github.jhipster.gateway.config;

import org.springframework.cloud.netflix.feign.EnableFeignClients;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableFeignClients(basePackages = "io.github.jhipster.gateway")
public class FeignConfiguration {

}
