import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  maxNumOfBottleCola: number = 0 //Số chai tối đa có được

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({})
  }

  buildForm() {
    this.myForm = this.fb.group({
      bottle: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.buildForm()
  }

  onSubmit(bottle: any){
    this.calBottle(bottle)
  }

  calBottle(bottle: number){
    let emptyBottle: number = bottle //Số vỏ chai
    while(emptyBottle >= 3){
      let numOfBottleTrade: number //Số chai đổi được từ 3 vỏ chai
      numOfBottleTrade = Math.floor(emptyBottle/3)

      emptyBottle = emptyBottle - numOfBottleTrade*2 //Vì đổi được 1 chai == mất 2 vỏ chai
      bottle += numOfBottleTrade;
    }
    this.maxNumOfBottleCola = bottle
  }
}


// Đề bài:
// Công ty cocacola tổ chức 1 chương trình khuyến mại, khi người tiêu dùng uống 3 chai thì đổi 3 vỏ chai sẽ được 1 chai coca mới.
// Là nhân viên lập trình và là con nghiện coca bạn cần viết 1 chương trình tính toán số chai coca mình có thể uống được.
// Đầu vào là số nguyên N (N > 0 và < 10^5) là số chai bạn có, Đầu ra in ra số lượng chai bạn có thể uống được.

// Gợi ý: nếu người tiêu dùng uống 5 chai thì sẽ đổi được 7 chai mới.
