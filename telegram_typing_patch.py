# Этот файл нужен только для PyCharm, чтобы не подсвечивался WebAppInfo
try:
    from telegram import WebAppInfo
except ImportError:
    # фиктивный класс для подсветки в PyCharm
    class WebAppInfo:
        def __init__(self, url: str):
            self.url = url
