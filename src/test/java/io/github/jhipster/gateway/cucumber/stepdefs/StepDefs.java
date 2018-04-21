package io.github.jhipster.gateway.cucumber.stepdefs;

import io.github.jhipster.gateway.LogNGatewayApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = LogNGatewayApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
