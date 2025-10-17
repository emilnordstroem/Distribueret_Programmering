

class Person {

    constructor (name) {
        this.name = name;
    }

    addToGroup(group){
        this.partOfGroup = group;
    }

}

class Group {

    constructor (name) {
        this.name = name;
        this.groupMembers = [];
    }

    addGroupMember (person) {
        this.groupMembers.push(person);
        person.addToGroup(this);
    }

}

const legoBuildingGroup = new Group("Lego Builders");
const legoBuilder = new Person("Emil");
legoBuildingGroup.addGroupMember(legoBuilder);
legoBuildingGroup.groupMembers.forEach(member => console.log(member.name));
console.log(legoBuilder.partOfGroup);

