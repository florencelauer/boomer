import boomer.api
import browser

__algorithms = list(boomer.api._default_algo_cfgs().keys())

def __list_algorithms():
    return __algorithms

def __execute(input, js_algo_configs=None, seed=None):
    # convert javascript objects to python objects
    algo_configs = {}
    if js_algo_configs is not None:
        for algo_name in js_algo_configs:
            if algo_name not in __algorithms:
                print('Invalid algorithm specified: ' + algo_name)
                continue
            algo_configs[algo_name] = js_algo_configs[algo_name]

    return boomer.boomer(input, algo_cfgs=algo_configs, seed=seed)

browser.document.boomer = {}
browser.document.boomer.algorithms = __list_algorithms
browser.document.boomer.execute = __execute
