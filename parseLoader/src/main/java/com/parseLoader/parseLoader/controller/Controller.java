package com.parseLoader.parseLoader.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.parseLoader.parseLoader.entity.HomepageForm;

@RestController
public class Controller {

    private static final Logger logger = LoggerFactory.getLogger(Controller.class);
    @PostMapping(path= "/homepageFormSubmission", consumes = "application/json", produces = "application/json")
    @CrossOrigin
    public ResponseEntity<HomepageForm> getHomepageFormSubmission(@RequestBody HomepageForm homepageForm) {
        

        logger.info("response for Homepageform ===> " + homepageForm.getBuilderType()
        + " " + homepageForm.getInputEmail() + " " + homepageForm.getInputFullName()
        + " " + homepageForm.getInputWebsite() + " " + homepageForm.getInputZip() 
        + " " + homepageForm.getInputisBorC() + " " + homepageForm.getCountryType() 
        + " " + homepageForm.getInputRefer()
        );

        return ResponseEntity.ok().build();

    }
}
