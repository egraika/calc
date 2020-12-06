package com.example.calculator.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.Stack;

@Controller
public class Calculator {

  Queue<String> previousExpressions = new LinkedList<>();

  @PostMapping(path = "/saveCalculation", produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<Queue<String>> postCalculation(@RequestBody String calculation) {
    previousExpressions.add(calculation);
    if(previousExpressions.size() > 10) {
      previousExpressions.remove();
    }

    MultiValueMap<String, Object> headers = new LinkedMultiValueMap<>();
    headers.add("Access-Control-Allow-Origin", "*");
    headers.add("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
    headers.add("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    return new ResponseEntity(previousExpressions, headers, HttpStatus.OK);
  }

  @GetMapping(path = "/getCalculations", produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<List<String>> getCalculations() {
    MultiValueMap<String, Object> headers = new LinkedMultiValueMap<>();
    headers.add("Access-Control-Allow-Origin", "*");
    headers.add("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
    headers.add("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    return new ResponseEntity(previousExpressions, headers, HttpStatus.OK);  }
}
