package org.project.sideEffects.Controller;

import org.project.sideEffects.Models.Report;
import org.project.sideEffects.Service.ReportService;
import org.project.sideEffects.Service.Service;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/reports")
public class ReportController {

    private final Service service;
    private final ReportService reportService;

    public ReportController(Service service, ReportService reportService) {
        this.service = service;
        this.reportService = reportService;
    }

    @GetMapping
    public ResponseEntity<List<Report>> getAllReports() {
        List<Report> reportList = reportService.getAllReports();
        return ResponseEntity.ok(reportList);
    }

    @PostMapping("/{productId}/{sideEffectId}")
    public ResponseEntity<Report> saveSideEffect(@PathVariable long productId,
                                                 @PathVariable long sideEffectId) {
        try {
            Report report = reportService.saveReport(productId, sideEffectId);
            URI location = URI.create(report.getId() + "");
            return ResponseEntity.created(location).body(report);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateReport(
            @RequestBody ReportDTO dto,
            @PathVariable long id) {
        try {
            System.out.println("age = " + dto.age());
            reportService.updateReport(id, dto.age());
            return ResponseEntity.accepted().build();
        } catch (Exception e) {
            return ResponseEntity.noContent().build();
        }
    }

    @GetMapping("/product-chart/{productId}")
    public ResponseEntity<List<ReportChartDTO>> getProductChartData(@PathVariable long productId) {
        List<Report> reportList = reportService.getProductReports(productId);
        List<ReportChartDTO> chartDTOList = ReportChartDTO.reportListToDTO(reportList);
        return ResponseEntity.ok(chartDTOList);
    }

    @GetMapping("/demographic-chart/{productId}")
    public ResponseEntity<List<ReportChartDTO>> getChartData(
            @PathVariable long productId,
            @RequestBody ReportDTO dto
    ) {
        try {
            if (dto.age() < 0) {
                throw new IllegalArgumentException("Age cannot be negative");
            }
            List<Report> reportList = reportService.getDemographicReports(productId, dto.age());
            List<ReportChartDTO> chartDTOList = ReportChartDTO.reportListToDTO(reportList);
            return ResponseEntity.ok(chartDTOList);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
