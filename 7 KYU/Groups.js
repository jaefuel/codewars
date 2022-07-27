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