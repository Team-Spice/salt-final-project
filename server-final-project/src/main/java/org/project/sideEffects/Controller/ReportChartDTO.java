package org.project.sideEffects.Controller;

import org.project.sideEffects.Models.Report;
import org.project.sideEffects.Models.SideEffect;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public record ReportChartDTO(long sideEffectId, String sideEffectName, long amount) {

    public static List<ReportChartDTO> reportListToDTO(List<Report> reportList) {
        Set<SideEffect> sideEffectSet = reportList.stream()
                .map(Report::getSideEffect)
                .collect(Collectors.toSet());
        List<ReportChartDTO> chartDTOList = new ArrayList<>();

        for (SideEffect se: sideEffectSet) {
            long amount = reportList.stream()
                    .filter(s -> s.getSideEffect().getId() == se.getId())
                    .count();
            chartDTOList.add(new ReportChartDTO(se.getId(), se.getName(), amount));
        }
        return chartDTOList;
    }

}
