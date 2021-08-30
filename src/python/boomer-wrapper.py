from browser import document, alert
from boomer.api import boomer

__algorithms = {
    'monique', 'alain', 'nicole', 'serge',
    'andré', 'muriel', 'denis', 'guy', 'chantal',
    'marc', 'manon', 'sylvain', 'josey', 'yves',
}

def __list_algorithms():
    return __algorithms

def __execute(input, js_algo_configs=None, seed=None):
    # convert javascript objects to python objects
    algo_configs = {}
    if js_algo_configs is not None:
        print("here")
        for algo_name in js_algo_configs:
            if algo_name not in __algorithms:
                print('Invalid algorithm specified: ' + algo_name)
                continue
            algo_configs[algo_name] = js_algo_configs[algo_name]

    return boomer(input, algo_cfgs=algo_configs, seed=seed)

document.boomer = {}
document.boomer.algorithms = __list_algorithms
document.boomer.execute = __execute
