import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/Store';
import {getTransactions} from '../../redux/UserSlice';
import LoadingComponent from '../components/LoadingComponent';
import Empty from '../components/Empty';
import TransactionItem from './Item';

const Transactions = () => {
  const dispatch = useDispatch();
  const {transactions, loading, user, token} = useSelector(
    (state: RootState) => state.user,
  );

  React.useEffect(() => {
    dispatch(getTransactions({user: user.email, token}));
  }, [getTransactions]);

  if (loading) {
    return <LoadingComponent />;
  }
  if (transactions.length > 0) {
    return (
      <FlatList
        contentContainerStyle={{
          paddingBottom: '40%',
          marginTop: '5%',
        }}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() =>
              dispatch(getTransactions({user: user.email, token}))
            }
          />
        }
        data={transactions}
        renderItem={item => <TransactionItem item={item.item} />}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
  return (
    <Empty title="You dont have any transactions currently, click Home and add " />
  );
};

export default Transactions;
