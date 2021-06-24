 class stringcls{
    static find(x)
    {
        var str="JavaScript is the programming language of the Web.";
        var n = str.search(x);
        console.log("position"+n);
    }
}

stringcls.find("is");