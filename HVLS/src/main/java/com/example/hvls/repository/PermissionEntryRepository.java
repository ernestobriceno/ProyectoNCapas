package com.example.hvls.repository;

import com.example.hvls.domain.entity.PermissionEntry;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PermissionEntryRepository extends JpaRepository<PermissionEntry, Long> {
}
