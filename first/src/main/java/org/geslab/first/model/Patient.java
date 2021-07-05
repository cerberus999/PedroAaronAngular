package org.geslab.first.model;

import java.util.Date;

import javax.persistence.*;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "paciente")
@EntityListeners(AuditingEntityListener.class)
public class Patient{
	
	@Id
	@Column(name = "id_pac", nullable = false)
	private long id;
	
	@Column(name = "nombres_pac")
	private String name;
	
	@Column(name = "apel_pat_pac")
	private String fat_lastname;
	
	@Column(name = "apel_mat_pac")
	private String mat_lastname;

	@Temporal(TemporalType.DATE)
	@Column(name = "fec_nac_pac")
	private Date dateBirth;
	
	@Column(name = "sexo_pac", nullable = true)
	private String sex;

	@Column(name = "dir_pac", nullable = true)
	private String direction;

	@Column(name = "tel_pac", nullable = true)
	private String telephone;
	
	@Column(name = "edad_pac", nullable = true)
	private String age;
	
	@Column(name = "tipo_aseg_pac", nullable = true)
	private String securedType;
	
	@Column(name = "com_pac", nullable = true)
	private String comment;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFat_lastname() {
		return fat_lastname;
	}

	public void setFat_lastname(String fat_lastname) {
		this.fat_lastname = fat_lastname;
	}

	public String getMat_lastname() {
		return mat_lastname;
	}

	public void setMat_lastname(String mat_lastname) {
		this.mat_lastname = mat_lastname;
	}

	public Date getDateBirth() {
		return dateBirth;
	}

	public void setDateBirth(Date dateBirth) {
		this.dateBirth = dateBirth;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getDirection() {
		return direction;
	}

	public void setDirection(String direction) {
		this.direction = direction;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getSecuredType() {
		return securedType;
	}

	public void setSecuredType(String securedType) {
		this.securedType = securedType;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}
}
