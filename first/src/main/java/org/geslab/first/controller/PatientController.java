package org.geslab.first.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.geslab.first.exception.ResourceNotFoundException;
import org.geslab.first.model.Patient;
import org.geslab.first.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PatientController {
	@Autowired
	private PatientRepository patientRepository;
	
	@GetMapping(value = "/patients")
	public List<Patient> getAllPatients(@PageableDefault(size = 20, page = 0)Pageable pageable) {
		Page<Patient> res;
		res = patientRepository.findAll(pageable);
		return res.toList();
	}
	
	@GetMapping("/patients/{id}")
	public ResponseEntity<Patient> getPatientById(@PathVariable(value = "id") Long patientId)
		      throws ResourceNotFoundException {
		Patient patient =
	    patientRepository
	        .findById(patientId)
	        .orElseThrow(() -> new ResourceNotFoundException("User not found on :: " + patientId));
	    return ResponseEntity.ok().body(patient);
	}
	
	@PostMapping("/patients")
	  public Patient createPatient(@Valid @RequestBody Patient patient) {
	    return patientRepository.save(patient);
	  }

	  /**
	   * Update user response entity.
	   *
	   * @param userId the user id
	   * @param patientDetails the user details
	   * @return the response entity
	   * @throws ResourceNotFoundException the resource not found exception
	   */
	  @PutMapping("/patient/{id}")
	  public ResponseEntity<Patient> updatePatient(
	      @PathVariable(value = "id") Long userId, @Valid @RequestBody Patient patientDetails)
	      throws ResourceNotFoundException {

	    Patient patient =
	        patientRepository
	            .findById(userId)
	            .orElseThrow(() -> new ResourceNotFoundException("User not found on :: " + userId));

	    patient.setName(patientDetails.getName());
	    patient.setFat_lastname(patientDetails.getFat_lastname());
	    patient.setMat_lastname(patientDetails.getMat_lastname());
	    patient.setSex(patientDetails.getSex());
	    patient.setDirection(patientDetails.getDirection());
	    patient.setAge(patientDetails.getAge());
	    patient.setSecuredType(patientDetails.getSecuredType());
	    patient.setComment(patientDetails.getComment());
	    patient.setDateBirth(new Date());
	    final Patient updatedPatient = patientRepository.save(patient);
	    return ResponseEntity.ok(updatedPatient);
	  }

	  /**
	   * Delete user map.
	   *
	   * @param patientId the user id
	   * @return the map
	   * @throws Exception the exception
	   */
	  @DeleteMapping("/patient/{id}")
	  public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long patientId) throws Exception {
	    Patient patient =
	        patientRepository
	            .findById(patientId)
	            .orElseThrow(() -> new ResourceNotFoundException("User not found on :: " + patientId));

	    patientRepository.delete(patient);
	    Map<String, Boolean> response = new HashMap<>();
	    response.put("deleted", Boolean.TRUE);
	    return response;
	  }
	
	@GetMapping("/Hello")
	public String nums() {
	  return "Hello world!!";
	}
}
