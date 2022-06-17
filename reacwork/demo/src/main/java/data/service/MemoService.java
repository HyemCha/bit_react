package data.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import data.dto.MemoDto;
import data.mapper.MemoMapper;

@Service
public class MemoService {

    @Autowired
    private MemoMapper memoMapper;

    public void insertMemo(MemoDto dto){
        memoMapper.insertMemo(dto);
    }
    public List<MemoDto> getMemoDatas(){
        return memoMapper.getMemoDatas();
    }
    public void deleteData(int num){
        memoMapper.deleteData(num);
    }

}
