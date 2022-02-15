

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


/**
 * 
 * 带头结点的单链表
 * 
 * **/ 

class SingleLinkedList{

    constructor(){
        this.size=0;
        this.head = new Node('head');
        this.currentNode = '';
    }

    /**
     * 
     * 查找功能
     * 1. findByContent
     * 2. findByIndex
     * 3. findIndexByContent
     * 4. findPreNode
     * 
     * **/ 

    // 1.通过元素的data查找元素

    /**
     * 
     * 1. 已知一个元素的content，查找该元素
     * 
     * @param content: 元素内容
     * 
     * @returns 查找到的话返回该node，查找不到的话返回-1
     * 
     * **/
    findByContent(content){
        let currentNode = this.head;
        while(currentNode.next){
            let nextNode = currentNode.next;
            if(nextNode.data ===  content){
                return nextNode;
            }
            currentNode = nextNode;
        }
        return -1;
    }



    /**
     * 
     * 2. 已知某个index, 查找该index上的元素
     * 
     * LinkedList 的index从1开始技术，头节点的index为0
     * @param index （1,2,3....）
     * 
     * @returns 查找到的话返回该node，查找不到的话返回-1
     * **/
    findByIndex(index){
        
        if(index<1){
            return -1;
        }

        if(index>this.size){
            return -1;
        }

        

        let loopIndex = 1;
        let currentNode = this.head;
        while(currentNode.next){
            if(loopIndex === index){
                return currentNode.next;
            }
            currentNode = currentNode.next;
            loopIndex++;
           
        }
        return -1;
    }

    // 3. 通过元素的data查找index    跟findByContent很像
    findIndexByContent(){

    }

    /**
     * 4.已知一个node,查找前一个node
     * 
     * @param node:查找该结点前面的结点
     * @returns 查找到的前一个结点，找不到返回-1
     * 
     * 
     * 如果是第一个结点，可以返回头结点（这种方式感觉更合理一些）
     * **/ 
    findPreNode(node){
        
        let currentNode = this.head.next;
        while(currentNode.next){
            if(currentNode.next === node){
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return -1;
    }



    /**
     * 
     * 插入功能
     * 1. insert： 已知一个元素，  在元素后面插入
     * 2. insertBefore: 已知一个元素，在元素前面插入
     * 3. append: 在链表最后添加元素
     * 4. unshift: 在链表头部添加元素
     * 5. insertByContent: 已知一个元素的内容，在元素的后面/前面插入  
     * 6. insertByIndex: 一个元素的index,在元素的后面/前面插入
     * 
     * 
     * **/

    /**
     * 
     *  1. 已知一个元素，  在元素后面插入
     * 
     * @param node: 在该结点后面插入
     * @param element: 元素内容
     * 
     * 
     * 添加一个功能，对node进行判断，判断一node是否存在于链表中，
     * 
     * 判断二，链表为空的话，如何去插入
     * 
     * **/ 
    insert(node, element){

        // TODO1 对node,element进行判断
        // TODO2 链表为空的话，如去插入 
       
        let newNode = new Node(element);
        
        // 先把next保存起来
        let next = node.next;

        node.next = newNode;
        newNode.next = next;

        this.size++;
       
    }


    /**
     * 
     * 2. 已知一个元素，在元素前面插入元素
     * 
     * @param node: 在该节点前面插入
     * @param element: 元素的内容
     * 
     * @returns null
     * **/

    insertBefore(node, element){

        let newNode = new Node(element);
        
        // 查找前一个元素
        const preNode = this.findPreNode(node);

        preNode.next = newNode;

        newNode.next = node;

        this.size++;

    }



    /**
     * 
     * 3. 在链表最后添加
     * 
     * @param element:添加结点的内容
     * @returns null
     * 
     * **/ 
    append(element){
        
        let newNode = new Node(element);
        
        let currNode = this.head;
        while(currNode.next){
            currNode = currNode.next;
        }
        currNode.next = newNode;
        this.size++;
    }


    /**
     * 
     * 4. 在链表，表头添加
     * 
     * 这个貌似没有必要
     * 
     * @param element:添加结点的内容
     * 
     * **/

    unshift(element){

        // 如果element是引用类型怎么办   好像也没有啥影响

        let newNode = new Node(element);

        let next = this.head.next;

        this.head.next = newNode;

        newNode.next = next;

        this.size++;

    }



    insertByContent(){}
    insertByIndex(){}



    /**
     * 
     * 删除结点
     * 
     * 1. 从表尾删除
     * 2. 从表头删除
     * 3. 已知某个结点，并删除他
     * 4. 已知某个结点的内容，删除他
     * 5.已知某个结点的index,删除他
     * 
     * **/ 

    /**
     * 
     * 1. 从表尾删除
     * 
     * **/
    pop(){

        let currentNode = this.head;
        let nextNode = currentNode.next;
        if(!nextNode){
            // 这里应报错比较合适（需要返回值的，返回-1；不需要返回值的报错）
            return -1;
        }
        while(nextNode){
            let nextNextNode = nextNode.next;
            if(!nextNextNode){
                currentNode.next = null;
                return
            }
            currentNode = nextNode;
            nextNode = nextNextNode;
        }

    }

    /**
     * 
     * 2.删除指定结点（知道指针）
     * 
     * 
     * 
     * **/

    remove(node){

        // 链表为空怎么处理（判断node是否属于当前链表）
        const preNode = this.findPreNode(node);
        preNode.next = node.next;    
    }

    removeNextNode(node){
        if(node.next){
            const nextNextNode = node.next.next;
            node.next = nextNextNode;
        }

        // 改为报错
        return -1
    }



    /**
     * 
     * 单链表的遍历
     * 
     * **/ 

    display(){
        let result='';
        let currentNode = this.head.next;
        while(currentNode){
            result = result + currentNode.data;
            currentNode = currentNode.next;
            if(currentNode){
                result = result + '->';
            }
        }

        console.log(result);
    }

}


export const testList = new SingleLinkedList();

testList.append(1);
// testList.append(2);
// testList.append(3);



// const res1 = testList.findByIndex(1);

// const preNode = testList.findPreNode(res1);

// console.log(preNode);









// const res1 = testList.findByIndex(2);
// console.log(res1);



// const findRes = testList.findByContent(2);
// console.log(findRes)



const res1 = testList.findByIndex(1);
testList.insert(res1, 12);
testList.insert(res1, 13);
const res2 = testList.findByIndex(4)

console.log(res2);



testList.display();





