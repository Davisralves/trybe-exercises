import pytest
from exercise_3 import validate_email


def test_if_an_email_without_at_sing_throws_an_exeception():
    with pytest.raises(BaseException, match="Email invalido"):
        validate_email("davi324.com")


def test_if_an_email_without_dot_com_raises_an_exeception():
    with pytest.raises(BaseException, match="Email invalido"):
        validate_email('davi@djaodjaj.')


def test_if_an_email_with_simbles_raise_an_exeception():
    with pytest.raises(BaseException, match="Email invalido"):
        validate_email('davi*@&&*s.com')
