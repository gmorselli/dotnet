import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuildingTreeService } from '../../services/buildingTree.service';
import { BuildingTreeManagerService } from '../../services/buildingTreeManager.service';
import { BuildingTree } from 'src/models/BuildingTree';
import { TreeNode } from 'primeng/primeng';

@Component({
  selector: 'app-building-tree',
  templateUrl: './building-tree.component.html',
  styleUrls: ['./building-tree.component.css']
})
export class BuildingTreeComponent implements OnInit {

  tree: TreeNode[];
  things: any[];
  selectedNode: any = null;
  droppableAdded: boolean = false;
  saveButtonDisabled: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private BuildingTreeService: BuildingTreeService,
    private elRef:ElementRef,
    private buildingTreeManagerService: BuildingTreeManagerService
    ) { }

  ngOnInit() {
    this.getBuildingTree();
  }

  save() {
    console.log('save');
  }

  drop(event, id) {
    let thing = event.srcElement.innerText;
    
    this.buildingTreeManagerService.setAddedItemToThings(thing, this.selectedNode, id);
    this.initTrees();
    this.saveButtonDisabled = !this.buildingTreeManagerService.allThingsExitsAreFull();
  }

  nodeSelect(event) {
    this.selectedNode = event.node.type == 'item' ?
                        event.node.label : 
                        null;
  }

  ngAfterViewChecked() {
    let nodes: any[] = this.elRef.nativeElement.querySelectorAll('.ui-treenode-content');
    this.addDraggableToEachNode(nodes);
  }

  addDraggableToEachNode(nodes: any[]) {
    nodes.forEach(element => {
      element.setAttribute("draggable", "true");
    });
    this.droppableAdded = true;
  }

  getBuildingTree() {
    const buildingId: number = +this.route.snapshot.paramMap.get('buildingId');
    this.BuildingTreeService.getBuildingTree(buildingId)
      .subscribe(response => this.initBuildingService(response));
  }

  initBuildingService(buildingTree: BuildingTree) {
    this.buildingTreeManagerService.setTreeFromServer(buildingTree);
    this.initTrees();
  }

  initTrees(): void {
    this.tree = this.buildingTreeManagerService.buildBuildingTree();
    this.things = this.buildingTreeManagerService.buildThingsTree();
  }
}
