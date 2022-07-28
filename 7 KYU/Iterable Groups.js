class Group 
{
    constructor()
    {
        this.group = [];
        
    }

    add(x)
    {
        if (!this.group.includes(x))
        {
            this.group.push(x)
        }
    }

    delete(x)
    {
        if (this.group.includes(x))
        {
            this.group.splice(this.group.indexOf(x), 1)
        }
    }

    has()
    {
        return this.group.includes(x)
    }

    static from(obj)
    {
        let newGroup = new Group();
       
        for (let e of obj)
        {
            newGroup.add(e);
        }

        return newGroup;

    }
}

class GroupIterator
{
    constructor(obj)
    {
        this.x = 0;
        this.group = obj.group;
    }

    next()
    {
        if (this.x == this.group.length)
        {
            return {done: true};
        }

        let value = this.group[this.x];
        
        this.x++;
        return {value, done: false};
    }

    
}

Group.prototype[Symbol.iterator] = function() 
{
    return new GroupIterator(this);
};