package org.project.sideEffects.Controller;

import java.util.Map;

public record ProductReportSummaryDTO(
        String productName,
        long totalReports,
        int age,
        Map<String, Long> sideEffects

) {}