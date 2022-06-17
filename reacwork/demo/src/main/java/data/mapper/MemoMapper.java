package data.mapper;

import java.util.List;

import data.dto.MemoDto;

public interface MemoMapper {

    public void insertMemo(MemoDto dto);
    public List<MemoDto> getMemoDatas();
    public void deleteData(int num);
}
