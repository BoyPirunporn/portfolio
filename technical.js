function sort(args) {
    if(args.length <= 1){
        return args;
    }

    for(let i = 0; i < args.length; i++){
        for(let j = 0; j < args.length - 1; j++){
            if(args[j] > args[j + 1]){
                let temp = args[j];
                args[j] = args[j + 1];
                args[j + 1] = temp;
            }
        }
    }

    return args
}