import { Injectable } from '@angular/core';
import { BuildingTree } from '../models/BuildingTree';
import { TreeNode } from 'primeng/primeng';
import { Floor } from '../models/Floor';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class BuildingTreeManagerService {

    things: any[];
    floors: Floor[];
    buildingName: string;
    addedItemsToTings: any[] = [];
    itemsByThingCounter: any[] = [];
    itemCount: number = 0;
    nodeCommonProp = {
        expandedIcon: "fa fa-folder-open",
        collapsedIcon:"fa fa-folder",
        expanded: true,
        draggable: true
      };

    setTreeFromServer(tree: BuildingTree) {
      this.things = tree.things;
      this.buildingName = tree.name;
      this.floors = tree.treeFloor;
      this.setItemsByThingCounter();
    }

    setItemsByThingCounter() {
      this.things.forEach(thing => this.itemsByThingCounter.push({
        id: thing.id,
        counter: 0,
        uscite: thing.numUscite
      }));
    }

    buildBuildingTree(): TreeNode[] {
      let buildingTree: TreeNode[] = [];
      this.itemCount = 0;

      buildingTree.push({
        label: this.buildingName,
        children: this.buildingNode(this.floors),
        ...this.nodeCommonProp
      });

      return buildingTree;
    }

    setAddedItemToThings(thing, name, id) {
      let itemCounter = this.itemsByThingCounter.find(obj => obj.id.toString() === id);
      let fullExits = itemCounter.counter.toString() === thing;
      if(!fullExits) {
        this.addedItemsToTings.push({ thing, name, id });
        itemCounter.counter++;
      }
    }

    buildThingsTree() {
      let thingsTree = this.things.reduce((acc, thing) => {
        let nodeToAdd = this.addedItemsToTings.filter(relation => thing.id == relation.id);
        let node: TreeNode = {
          label: thing.numUscite.toString(),
          data: thing.id.toString(),
          ...this.nodeCommonProp
        };
        
        if(nodeToAdd) {
          node.children = this.buildingNode(nodeToAdd);
        }
        
        acc.push([node]);
        return acc;
      }, []);
      
      return thingsTree;
    }
    
    buildingNode(items: any[]): TreeNode[] {
      return items.reduce((acc, item) => {
        let {name = null, children = null, type = null} = item;
        let isItemNodeAddedToThing = type == 'item' && 
                                     this.addedItemsToTings.filter(relation => name === relation.name).length > 0;
    
        if(!isItemNodeAddedToThing) {
          let node: TreeNode = {
            label: name,
            type: type ? type : 'father',
            ...this.nodeCommonProp
          };
      
          if (children) {
            node.children = this.buildingNode(children);
          }
          acc.push(node);
        }

        if(type === 'item') {
          this.itemCount++;
        }
        
        return acc;
      }, <TreeNode[]>[])
    }

    allThingsExitsAreFull(): boolean {
      var counter: number = this.itemsByThingCounter.reduce((acc, obj) => acc = acc + obj.counter , 0);
      return counter == this.itemCount;
    }
}