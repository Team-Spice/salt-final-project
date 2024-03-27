package org.project.sideEffects.Repository;

import org.project.sideEffects.Models.SideEffect;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SideEffectRepo extends JpaRepository<SideEffect, Long> {
}
