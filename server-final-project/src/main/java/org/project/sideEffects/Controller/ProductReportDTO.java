package org.project.sideEffects.Controller;

import java.util.Map;

public record ProductReportDTO(
        String productName,
        long totalReports,
        Map<Integer, Map<String, Long>> sideEffectsByAge
) {}