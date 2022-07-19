// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, 
// where the values of the properties are equal when compared with a recursive call to deepEqual.

function deepEqual(val1,val2)
{
    if (typeof val1 === "object" && typeof val2 === "object" )
    {
        let l = Math.max(Object.keys(val1).length, Object.keys(val2).length)
        let t = true;

        for (let i = 0; i < l; i++)
        {
            if (!deepEqual(val1[Object.keys(val1)[i]],val2[Object.keys(val2)[i]]))
            {
                t = false;
            }                
        }

        return t;
    }
    else if (typeof val1 === "object" || typeof val2 === "object" )
    {
        return false;
    }
    else if (val1 === val2)
    {
        return true;
    }
}
