package com.company.manager.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.company.manager.Entity.Company;
import com.company.manager.Repository.CompanyRepo;

@Service
public class CompanyImpl implements CompanyService {
    @Autowired
    private CompanyRepo repo;

    @Override
    public List<Company> getCompanies() {
        return repo.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }

    @Override
    public Company getCompany(Long id) {
        return repo.findById(id).get();
    }

    @Override
    public boolean updateCompany(Company company) {
        repo.save(company);
        return true;
    }

    @Override
    public boolean deleteCompany(Long id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
            return true;
        }
        return false;
    }
}
