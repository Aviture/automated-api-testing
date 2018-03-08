Feature: Example API Test

  Scenario: httpbin anything request
    When I hit the http bin anything request
    Then the reply status code should be 200
    And the response url should be "https://httpbin.org/anything"