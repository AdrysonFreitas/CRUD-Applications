import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { WindowDialogComponent } from 'src/app/shared/window-dialog/window-dialog.component';

export interface UserData {
  id: number;
  name: string;
  progress: number;
  fruit: string;
}

const ELEMENT_DATA: UserData[] = [
  {id: 1, name: 'Tillie Knox', progress: 20, fruit: 'Avocado'},
  {id: 2, name: 'Tymon Xiong', progress: 40, fruit: 'Apple'},
  {id: 3, name: 'Rebekka Farrow', progress: 69, fruit: 'Pineapple'},
  {id: 4, name: 'Lottie Dalby', progress: 90, fruit: 'Pear'},
  {id: 5, name: 'Kerys Guzman', progress: 10, fruit: 'Orange'},
  {id: 6, name: 'Eren Fields', progress: 12, fruit: 'Banana'},
  {id: 7, name: 'Ellouise Jaramillo', progress: 14, fruit: 'Tangerine'},
  {id: 8, name: 'Leonidas Soto', progress: 59, fruit: 'Orange'},
  {id: 9, name: 'Lewys Sheridan', progress: 87, fruit: 'Cashew'},
  {id: 10, name: 'Allison Swift', progress: 23, fruit: 'Tangerine'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit', 'action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(public dialog: MatDialog) {
    const users = ELEMENT_DATA;
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {
  }
  openDialog(element: UserData | null): void {
    const dialogRef = this.dialog.open(WindowDialogComponent, {
      width: '300px',
      data: element === null ? {
        id: null,
        name: '',
        progress: null,
        fruit: ''
      } : {
        id: element.id,
        name: element.name,
        progress: element.progress,
        fruit: element.fruit
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined){
        let data = this.dataSource.data;
        if (data.map(p => p.id).includes(result.id)){
          let index = 0;
          for (let i = 0; i < data.length; i++){
            if (data[i].id == result.id){
              index = i;
            }
          }
          data[index] = result;
        } else if (data.map(p => p.id).includes((data.length)+1)){
          result.id = (data.length+2);
          data.push(result);
        } else {
          result.id = (data.length+1);
          data.push(result);
        }
        this.dataSource.data = data;
        this.table.renderRows;
      }
    });
  }

  editElement(element: UserData): void {
    this.openDialog(element);
  }

  deleteElement(id: number): void {
    let data = this.dataSource.data;
    data = data.filter(p => p.id !== id);
    this.dataSource.data = data;
  }

}
