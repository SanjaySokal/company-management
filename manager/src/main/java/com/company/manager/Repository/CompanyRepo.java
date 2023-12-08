package com.company.manager.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.company.manager.Entity.Company;

public interface CompanyRepo extends JpaRepository<Company, Long> {
}