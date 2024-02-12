package com.parseLoader.parseLoader.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HomepageForm {
@JsonProperty("builderType")
  private String builderType;
@JsonProperty("countryType")
  private String countryType;
@JsonProperty("inputEmail")
  private String inputEmail;
@JsonProperty("inputWebsite")
  private String inputWebsite;
@JsonProperty("inputFullName")
  private String inputFullName;
@JsonProperty("inputisBorC")
  private String inputisBorC;
@JsonProperty("inputZip")
  private String inputZip;
@JsonProperty("inputRefer")
  private String inputRefer;

  // Getter
  public String getBuilderType() {
    return builderType;
  }

  // Setter
@JsonProperty("data1")
  public void setBuilderType(String data1) {
    this.builderType = data1;
  }

  // Getter
  public String getCountryType() {
    return countryType;
  }

  // Setter
@JsonProperty("data2")
  public void setCountryType(String data2) {
    this.countryType = data2;
  }

  // Getter
  public String getInputEmail() {
    return inputEmail;
  }

  // Setter
@JsonProperty("data3")
  public void setInputEmail(String data3) {
    this.inputEmail = data3;
  }

  // Getter
  public String getInputWebsite() {
    return inputWebsite;
  }

  // Setter
@JsonProperty("data4")
  public void setInputWebsite(String data4) {
    this.inputWebsite = data4;
  }

  // Getter
  public String getInputFullName() {
    return inputFullName;
  }

  // Setter
@JsonProperty("data5")
  public void setInputFullName(String data5) {
    this.inputFullName = data5;
  }

  // Getter
  public String getInputisBorC() {
    return inputisBorC;
  }

  // Setter
@JsonProperty("data6")
  public void setInputisBorC(String data6) {
    this.inputisBorC = data6;
  }

  // Getter
  public String getInputZip() {
    return inputZip;
  }

  // Setter
@JsonProperty("data7")
  public void setInputZip(String data7) {
    this.inputZip = data7;
  }

  // Getter
  public String getInputRefer() {
    return inputRefer;
  }

  // Setter
  @JsonProperty("data8")
  public void setInputRefer(String data8) {
    this.inputRefer = data8;
  }
}
