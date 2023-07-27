

<div class="col-md-6">
<button type="button" class="btn btn-dark">
  <select (change)="selectName($event.target.value);">
       <option [value]="obj.Id" *ngFor="let obj of data">
           {{obj.Id}}
           {{obj.Name}}
    </option>

</select>
</button>
</div>

<div class="form-group voffset row">
<template #loadComponent>
</template>
</div>
</div>



  componentRef: any;

  @ViewChild('loadComponent', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  createComponent(Id: number) {
    this.entry.clear();
    if (Id == 1) {
      const factory = this.resolver.resolveComponentFactory(ChildinfoComponent);
      this.componentRef = this.entry.createComponent(factory);
    } else if (Id == 2) {
      const factory = this.resolver.resolveComponentFactory(ParentinfoComponent);
      this.componentRef = this.entry.createComponent(factory);
    }
    this.componentRef.instance.message = "Called by Dynamic - Component";
  }
  destroyComponent() {
    this.componentRef.destroy();
  }



  data = [
    {
      "Id": 1,
      "Name": "child Info"
    },
    {
      "Id": 2,
      "Name": "Parent Info"
    }
  ]

  selectName(id : number) {
    this.createComponent(id);
  }
