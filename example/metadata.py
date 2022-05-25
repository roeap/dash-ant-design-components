import collections
import importlib.util
import json
from functools import lru_cache
from pathlib import Path


def get_component_metadata(component_path):
    metadata = _load_metadata()
    return metadata.get(component_path)


@lru_cache(maxsize=1)
def _load_metadata():
    module_path = importlib.util.find_spec("dash_antd")
    if module_path is None:
        raise ModuleNotFoundError("Module `dah_antd` not found.")
    return _get_metadata(Path(module_path.origin).parent / "metadata.json")  # type: ignore


def _get_metadata(metadata_path: Path):
    with metadata_path.open() as data_file:
        json_string = data_file.read()
        data = json.JSONDecoder(object_pairs_hook=collections.OrderedDict).decode(json_string)
    return data
