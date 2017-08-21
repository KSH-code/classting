'use strict'
const express = require('express')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

require('./routes/index')(app)

app.listen(4000, () => { console.log('start') })
    /**
     * 2. 활성 사용자(MAU, WAU, DAU) 지표
       1. 활성 사용자 지표를 그래프와 테이블로 표현
       2. 3가지 지표(MAU, WAU, DAU)는 하나의 그래프영역에 표현 
       3. 다음의 내용 추가표현
         - min/max/avg
         - DAU는 전주대비 변화지표, ex) 6/2(금) -> 6/9(금)의 변화지표
       4. filter 기능 (date range, role, country): role은 student/parent/teacher ˜
     */