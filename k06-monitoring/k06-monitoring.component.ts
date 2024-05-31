import { Component,ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomToastrService } from '../../trackntrace/shared/services/custom-toastr.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MonitoringService } from '../k06-monitoring/k06-monitoring.service';

@Component({
  selector: 'app-k06-monitoring',
  templateUrl: './k06-monitoring.component.html',
  styleUrls: ['./k06-monitoring.component.css']
})
export class K06MonitoringComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  // constructor(
  //   // //private globalService: GlobalService,
  //   // private tighteningService: TighteningService,
  //   // private operationsService: OperationsService,
  //   // private workcenterService: WorkcenterService,
  //   // private excelService: ExcelService,
  //   // private alertMessageService: AlertMessageService,
  //   // private customToastrService: CustomToastrService,
  //   // private partsService: PartsService,
  // )
  showResults: boolean = false;
  showForms: boolean = false;
  // detailColumnDefinitions: any[] = [];

  // dataSource: MatTableDataSource<any>;
  // formGroupFilter = new FormGroup({
  //   toolIp: new FormControl(''),
  //   torqueControllerName: new FormControl(''),
  //   psetName: new FormControl(''),
  //   skuPartNo: new FormControl(''),
  //   psetId: new FormControl(''),
  //   toolSerialNo: new FormControl(''),
  //   toolId: new FormControl(''),
  //   toolType: new FormControl(''),
  //   programSerialNo: new FormControl(''),
  //   programId: new FormControl(''),
  //   stepNo: new FormControl(''),
  //   uom: new FormControl(''),
  //   lcl: new FormControl(''),
  //   ucl: new FormControl(''),
  //   totalTightenings: new FormControl(''),
  //   // isInterLock: new FormControl(false),
  //   active: new FormControl('')
  // })

  constructor(
    private customToastrService: CustomToastrService,
    private monitoringService: MonitoringService,
    
  ) { }
  get formGroupFilterControls() {
    return this.formGroupFilter.controls;
  }
  ngOnInit(): void {
  }
   private tableColumnDefinitions() {
  //   this.headerColumnDefinitions = [
  //     { def: 'headerexporter', showColum: true },
  //     { def: 'headerSpace', showColum: true },
  //     { def: 'headerToolIp', showColum: true },
  //     { def: 'headerTorqueControllerName', showColum: true },
  //     { def: 'headerPsetName', showColum: true },
  //     { def: 'headerSkuPart', showColum: true},
  //     { def: 'headerToolSerialNo', showColum: true },
  //     { def: 'headerToolId', showColum: true },
  //     { def: 'headerToolType', showColum: true },
  //     { def: 'headerProgramSerialNo', showColum: true },
  //     { def: 'headerProgramId', showColum: true },
  //     { def: 'headerPsetId', showColum: false },
  //     { def: 'headerStepNo', showColum: true },
  //     { def: 'headerUOM', showColum: true },
  //     { def: 'headerLCL', showColum: true },
  //     { def: 'headerUCL', showColum: true },
  //     { def: 'headerSpace', showColum: true },
  //     { def: 'headerSpace', showColum: true },
  //     { def: 'headerSpace', showColum: true },
  //     { def: 'headerActive', showColum: true },
  //     { def: 'headerfilter', showColum: true }
  //   ];
  //   this.detailColumnDefinitions = [
  //     { def: 'SlNo', showColum: true },
  //     { def: 'workcenterId', showColum: true },
  //     { def: 'toolIp', showColum: true },
  //     { def: 'torqueControllerName', showColum: true },
  //     { def: 'psetName', showColum: true },
  //     { def: 'skuPartNo', showColum: true},
  //     { def: 'toolSerialNo', showColum: true },
  //     { def: 'toolId', showColum: true },
  //     { def: 'toolType', showColum: true },
  //     { def: 'programSerialNo', showColum: true },
  //     { def: 'programId', showColum: true },
  //     { def: 'psetId', showColum: false },
  //     { def: 'stepNo', showColum: true },
  //     { def: 'uom', showColum: true },
  //     { def: 'lcl', showColum: true },
  //     { def: 'ucl', showColum: true },
  //     { def: 'channelId', showColum: true },
  //     { def: 'totalTightenings', showColum: true },
  //     { def: 'totalJoints', showColum: true },
  //     // { def: 'isInterLock', showColum: true },
  //     // { def: 'partType', showColum: true },
  //     { def: 'active', showColum: true },
  //     { def: 'edit', showColum: true }
  //   ];
  // }

 
  // headerColumnDefinitions = [
  //   { def: 'headerexporter', showColum: true },
  //   { def: 'headerSpace', showColum: true },
  //   { def: 'headerFixtureNo', showColum: false },
  //   { def: 'headerEngineNo', showColum: false },
  //   { def: 'headerfilter', showColum: true }
  // ];

  // getDisplayedHeaders(): String[] {
  //   return this.headerColumnDefinitions
  //     .filter(cd => cd.showColum === true)
  //     .map(cd => cd.def);
  // }

  // columnDefinitions: any[] = [];

  // getDisplayedColumns(): String[] {
  //   return this.columnDefinitions
  //     .filter(cd => cd.showColum === true)
  //     .map(cd => cd.def);
   }

  private tableBinding(data) {
    this.tableColumnDefinitions();
    this.showResults = data.length > 0;
    this.dataSource = new MatTableDataSource<any>(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = ((data, filter) => {
      const FrameNo = !filter.FrameNo || data.FrameNo.includes(filter.FrameNo);
      const skuPartNo = !filter.skuPartNo || data.skuPartNo.includes(filter.skuPartNo);
      const EngineNo = !filter.ENgineNo || data.toolId.includes(filter.EngineNo);
     
      return FrameNo && skuPartNo && EngineNo;
    }) as (PeriodicElement, string) => boolean;
    this.formGroupFilter.valueChanges.subscribe(value => {
      const filter = { ...value, name: value.toolIp.trim() } as string;
      //this.filter = filter;
      //this.dataSource.filter = this.filter;
    });
  }

  formGroupFilter = new FormGroup({
    Frameno: new FormControl(''),
    skuPartNo: new FormControl(''),
    EngineNo: new FormControl('')
    
  })

  formGroupModal = new FormGroup({
     
    inputModalFrameNo: new FormControl('', Validators.compose([Validators.required, Validators.min(17), Validators.maxLength(17)])),
    inputModalEngineNo: new FormControl('', Validators.compose([Validators.required, Validators.min(12), Validators.maxLength(16)])),
    inputModalSKUPartNo: new FormControl('', Validators.compose([Validators.required, Validators.min(1), Validators.maxLength(155)]))
  });


  get formGroupModalControls() {
    return this.formGroupModal.controls;
  }
  formGroupModalSubmitted = false;
  onModelFormSubmit() {
    // if (this.formGroupModalControls.inputModalLevel.value !== 0) {
    //   this.formGroupModal.controls['inputModalPartSubGrpId'].setValue(3);
    // }
    this.formGroupModalSubmitted = true;
    // stop here if form is invalid
    if (this.formGroupModal.invalid) {
      this.customToastrService.showFormFieldWarning('Fill all the input fields', 'Form field warning!..');
      return;
    } else {
       this.saveFrameData() ;
    }
  }
  private saveFrameData() {
    return this.monitoringService.saveFrameData(this.inputBody())
      .subscribe(resp => {
        const response: any = resp;
        if (response._id !== undefined) {
          this.onResetClick();
          let data: any = this.dataSource ? this.fnDataSourceRespHandling(response) : [response];
          this.tableBinding(data);
          console.log("test", data)
        }
      });
  }
  private fnDataSourceRespHandling(response) {
    this.dataSource.data.push(response);
    return this.dataSource.data;
  }

  private inputBody() {
    var httpBody: any = {};
    httpBody = {
      'FrameNo': (this.formGroupModalControls.inputModalFrameNo.value).trim(),
      'EngineNo': (this.formGroupModalControls.inputModalEngineNo.value).trim(),
      'SKUPartNo': (this.formGroupModalControls.inputModalSKUPartNo.value).trim(),
     
    }

    console.log("http body" + JSON.stringify(httpBody));
    // if(this.formGroupModalControls.inputModalPartSubGrpId.value == 1){
    //   if(this.formGroupModalControls.inputModalPartType.value){
    //     httpBody['partType'] = 'E';
    //   }
    // }
    
    return httpBody;
  }

  onResetClick() {
    this.formGroupModal.reset();
    // this.showPartSubGrp = false;
  }

  onCancelClick() {
    this.showForms = false;
    this.onResetClick();
  }


}


