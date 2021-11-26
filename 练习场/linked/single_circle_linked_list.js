class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}



class SingleCircleLinkedList {
    
    constructor(){
        this.size = 0;
        this.head = new Node('head');
        this.currentNode = '';
    }


    /**
     * 
     * 1. insert插入结点
     * 2. insertBefore 结点前面插入
     * 3. append 最后插入结点
     * 4. unshift 表头前面插入结点
     * 
     * **/ 


    /**
     * 
     *  1. insert 已知一个元素，  在元素后面插入
     * 
     * @param node: 在该结点后面插入(需要确保node在链表中)
     * @param element: 元素内容
     * 
     * 思考： node可不可以为head元素
     * 
     * 不能往第一个结点之前插入数据了
     * 
    **/ 
    insert(node, element){

        const newNode = new Node(element);
        
        // node不可能为空么
        if(this.size === 0){

            this.head.next = newNode;
            // newNode.next = newNode; // 两者都可以
            newNode.next = this.head.next;

        } else {

            newNode.next = node.next;
            node.next = newNode;

        }

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
    **/
    insertBefore(node, element){
        const newNode = new Node(element);
        
        // 不会为空么
        // if(this.size === 0){
        //     this.head.next = newNode;
        //     // newNode.next = newNode; // 两者都可以
        //     newNode.next = this.head.next;
        // }else {
        // }

        if(this.head === node){
            this.head.next = newNode;
            newNode.next = node;

            // 发现最后一个结点
            const lastNode = findLastNode();
            lastNode.next = newNode;

        } else {
            // 发现前一个结点
            const preNode = findPreNode(node);
            preNode.next = newNode;
            newNode.next = node;
        }


        this.size++;
    }

    append(){
        
    }

    unshift(){

    }








}

