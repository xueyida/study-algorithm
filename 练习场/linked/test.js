const assert  = require('assert');
const { testList } = require('./single_linked_list');


testList.append(1);
testList.append(2);
testList.append(3);
testList.append(4);

const i3 = testList.findByIndex(3);

testList.insert(i3, 3.5);
testList.insertBefore(i3, 2.5);

testList.pop();  // pop这里需要画图

testList.display();